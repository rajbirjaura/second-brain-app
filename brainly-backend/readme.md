# Brainly Project Steps 

# 1.BACKEND for index.js

# step1 initualize json file
npm init -y
this will initialize the package.json file

# step2 install typescript
npm install -d typescript (-d is dev version)
this will install typescript

# step3 make ts.confif file
npx tsc --init
the file we created uncomment root directory and out dir

# step 4 install express
npm install express

# step 5 create src folder
create src folder
inside this create index.ts

# step 6 use types express
npm install @types/express
this command is used to use express in ts 
also change the tsconfig file to this--->
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "skipLibCheck": true
  }
}


# step 7 install mongoose,jsonwebtokens
npm install mongoose jsonwebtokens
npm install @types/jsonwebtokens 
to use json web tokens in ts


# dont forget app.use(express.json())

# step 8 define routes in express
signup,signin,content(post,get,dleete),share,sharelink

# step 9 make db.ts and middleware.ts files 

# step 10 make db model and schema in db.ts
import {model,schema} from mongoose
first make userschema and then export usermodel
then go in index.ts and request username and pass in signup and signin

import usermodel in the index.ts and call create function

# step 11
add these scripts in package.json
    "build":"tsc -b",
    "start":"node dist/index.js",
    "dev":"npm run build && npm run start"


# step 12 Risky code in try catch 
you can put your risky in try catch


# step 13 make signin endpoinnt 
to make signin endpoint you need jwt 
first we take req.body pass and user then we make a new variable existingUser and use usermodel.findone function to find username and pass 
the we use if/else and if password found we return token by jwt.sign and use JWT_SECRET


# step 14 make content schema in db.ts

# step 15 create config.ts file
in this we put jwt_password code and export/import it 

# step 16 create middleware.ts
in this create user middleware
this step is little new so learn it 

# step 17 add the usermiddle ware in the conteht api 

after adding the usermiddle ware you can test it in postman copy the token and paste it in headers section and write "Authorization" send it you will see the content added message 


# step 18 POPULATE FUNCTION
populate function is used to get the content data of what we want like we want username only so write username in this 


# step 19 create delete endpoint 


# in this our mostly backend is complete only zod validation and share endpoint is remaining 


# lets complete the remaining 
# step 20  make share endpoint
write const share = req.body.share
then make link schema which will contain hash and userid


# step 21 hash
while creating hash you need to create random function in utils.ts folder


# step 22 utils.ts(this folder is used to put anyhing in this )
make utils.ts folder in create random function
use math.random() funcction 
code:--
export function random(len:number){
    let options = "gvcgshsghcgh123456789";
    let length = options.length;

    let ans = "";
    for(let i= 0;i<length;i++){
        ans +=options[Math.floor((Math.random() * length))]
    }
    return ans;
}


# step 23 
now use random function in hash






# 2.FRONTEND

# step 1 initialize npm create vite@latest 
npm create vite@latest 
select typescript 

# step 2 button component 
firstly we make a button component 
this is something new here becaue of concept of props and interfaces 
you need to learn it 

# step 3 Inside button component 
you will make many variants of the buttons,sizes,start icon ,end icon 
start icon and end icon should be optional so add ? after them 


# step 4 install tailwind and use find the hex values of colors 

# step5 after making buttton
export the buttton and import it in your mainn div

# step 6 string contatination 
there is new method ${} using this 

# step 7 how to put icons 
we will go to hero icons and copy svg file
make a new folder "icons" and make plusicon.jsx
you can export it and use it in the button component 
you have to do chnages in the button that firstly the start icon will render and then text and then endicon will render 


# step 8 logics
logic will be rendered in the button that if start icon exists then render the logic if it doesnt exist then null 


# step 9 we will make the icon size dynamic
we will make it dynamiuc by making its class name dynamic 
make a filename index.ts and in that file make the interface name iconprops and its variant sizes in icon variant sizes 