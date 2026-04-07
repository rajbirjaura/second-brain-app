import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const usernameref = useRef<HTMLInputElement>(null); //this is new thing 
    const passwordref = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    

    async function signin(){
        const username = usernameref.current?.value
        const password = passwordref.current?.value

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`,{
            username,
            password
        });
        
        const jwt = response.data.token;
        localStorage.setItem("token",jwt)
        navigate("/dashboard")


        setload(true);
    }

    const [load,setload] =useState(false);
    return <div className="min-h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border max-w-72 p-8 rounded">
            <Input ref={usernameref} placeholder="Username"/>
            <Input ref={passwordref} placeholder="Password"/>

            <div className="flex justify-center pt-4"><Button size="sm" FullWidth={true} variant="primary" text="Signin" loading={load} onClick={signin}/></div>

        </div>

    </div>
}