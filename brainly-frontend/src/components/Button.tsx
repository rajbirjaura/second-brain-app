export interface ButtonProps{
    variant:"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:any;
    endIcon?:any;
    onClick: ()=>void;
    FullWidth?:boolean;
    loading?:boolean;

}
const sizeStyles = {
    "sm":"p-2",
    "md":"p-4",
    "lg":"p-6"
}
const variantStyles ={
    "primary":"bg-yellow-300 text-black",
    "secondary":"bg-red-300 text-black"

}
const defaultStyles ="rounded-md flex items-center  p-3"


export const Button = (props:ButtonProps)=>{
    return <button onClick={props.onClick} className={`${props.FullWidth ? " w-full flex justify-center items-center":""}
     ${variantStyles[props.variant]}
      ${defaultStyles}
       ${sizeStyles[props.size]}
        ${props.loading ? "opacity-45 cursor-not-allowed":" cursor-pointer"}`} disabled={props.loading} >{props.startIcon? <div className="pr-2">{props.startIcon}</div>:null}{props.text}{props.endIcon}</button>
}

<Button variant="primary" size="md" onClick={()=>{}} text={"asd"}/>