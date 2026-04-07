interface InputProps{
    placeholder:string;
    ref?:any;
}



export const Input=({ref,placeholder}:InputProps)=>{ // you have to learn this 
    return <div>
        <input ref={ref} type={"text"} placeholder={placeholder} className="px-4 py-2 border rounded m-2"/>
    </div>
}