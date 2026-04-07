import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType{
    Youtube="youtube",
    Twitter="twitter"
}


export function CreateContentModal({open,onClose}){
    const titleref = useRef<HTMLInputElement>(null);
    const linkref = useRef<HTMLInputElement>(null);
    const [type,settype] = useState(ContentType.Youtube)


    async function addcontent(){
        const title = titleref.current?.value;
        const link = linkref.current?.value;
        await axios.post(`${BACKEND_URL}/api/vi/content`,{
            link,
            title,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        
    }
    // const [modalopen,setmodalopen] = useState(false);
    return <div>
        {open && <div className="min-h-screen w-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center items-center">
            
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon size="lg"/>
                        </div>
                    </div>
                    <div className="">
                        <Input ref={titleref} placeholder={"Title"}/>
                        <Input ref={linkref} placeholder={"Link"}/>
                    </div>
                    <div>
                        <h1>Type</h1>
                        <div className="flex gap-2 items-center justify-center">
                            <Button text="Youtube" variant={type===ContentType.Youtube?"primary":"secondary"} onClick={()=>{
                                settype(ContentType.Youtube)
                            }} ></Button>
                            <Button text="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"} onClick={()=>{
                                settype(ContentType.Twitter)}}></Button>
                        </div>
                    </div>
                    <div className="flex justify-center py-2">
                    <Button onClick={addcontent} variant="primary" text="Submit" size="sm"/>
                    </div>

                </span>

            </div>
            
            
            
            </div>}
    </div>

}