export interface ButtonProps{
    variant:"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:any;
    endIcon?:any;
    onClick: ()=>void;

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
const defaultStyles ="rounded-md flex"


export const Button = (props:ButtonProps)=>{
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon? <div className="pr-3">{props.startIcon}</div>:null}{props.text}{props.endIcon}</button>
}

<Button variant="primary" size="md" onClick={()=>{}} text={"asd"}/>