import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const usernameref = useRef<HTMLInputElement>(null); //this is new thing 
    const passwordref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    

    async function signup(){
        const username = usernameref.current?.value
        const password = passwordref.current?.value

        await axios.post(`${BACKEND_URL}/api/v1/signup`,{
            username,
            password
        });
        alert("you have signed up")
        setload(true);
        navigate("/signin")
    }

    const [load,setload] =useState(false);
    return <div className="min-h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border max-w-72 p-8 rounded">
            <Input ref={usernameref} placeholder="Username"/>
            <Input ref={passwordref} placeholder="Password"/>

            <div className="flex justify-center pt-4"><Button size="sm" onClick={signup} FullWidth={true} variant="primary" text="Signup" loading={load}/></div>

        </div>

    </div>
}