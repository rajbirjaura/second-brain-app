import express from 'express';
import mongoose from 'mongoose';
import  jwt  from 'jsonwebtoken';
import { contentModel, linkModel, userModel } from './db';
import { JWT_PASSWORD } from './config';
import { UserMiddleware } from './middleware';
import { random } from './utils';
import cors from 'cors'


const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup",async(req,res)=>{  //todo zod validation and hash pass
    const username = req.body.username;
    const password = req.body.password;
    try{
    await userModel.create({
        username:username,
        password:password
    })
    res.json({
        message:"user is signed in"
    })
}catch(e){
    res.status(402).json({
        message:"user already exists"
    })
}
    
})
app.post("/api/v1/signin",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await userModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id:existingUser._id
        },JWT_PASSWORD)

        res.json({
            token
        })

    }
    else{
        res.status(400).json({
            message:"incorrect credentials"
        })
    }

})
app.post("/api/v1/content",UserMiddleware,async (req,res)=>{
    const title = req.body.title;
    const link = req.body.link;
    await contentModel.create({
        title,
        link,
        tags:[],
        //@ts-ignore
        userId:req.userId,
        
    })
    return res.json({
        message:"content added"
    })

})
app.get("/api/v1/content",UserMiddleware,async (req,res)=>{
    //@ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({
        userId:userId
    }).populate("userId","username")
    res.json({
        content
    })

})
app.delete("/api/v1/content",UserMiddleware,async(req,res)=>{
    const contentid = req.body.contentid;
    
    await contentModel.deleteMany({
        contentid,
        //@ts-ignore
        userId:req.userId
    })
    res.json({
        message:"content deleted"
    })


})
app.post("/api/v1/brain/share",UserMiddleware,async(req,res)=>{
    const share = req.body.share;
    if(share){
        const existingLink = await linkModel.findOne({
            //@ts-ignore
            userId:req.userId
        });
        if(existingLink){
            res.json({
                hash:existingLink.hash
            })
            return;
        }
        const hash = random(10);
        await linkModel.create({
            
            //@ts-ignore
            userId:req.userId,
            hash:hash

        })

        res.json({
            message:"/share/" + hash
        })

    } else{
        linkModel.deleteOne({
            //@ts-ignore
            userId:req.userId
        });
        res.json({
            message:"removed link"
        })
    }
    

})
app.get("/api/v1/brain/:shareLink",async(req,res)=>{
    const hash = req.params.shareLink;

    const link = await linkModel.findOne({
        hash
    })
    if(!link){
        res.status(403).json({
            message:"sorry incorrect input"
        })
        return;
    }
    const content = await contentModel.find({
        userId:link.userId
    })
    const user = await userModel.findOne({
        _id:link.userId
    })

    if(!user){
        res.status(401).json({
            message:"user not found"
        })
        return;
    }
    res.json({
        username:user?.username,
        content:content
    })


})

app.listen(3000);