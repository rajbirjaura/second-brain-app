"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const sizeStyles = {
    "sm": "p-2",
    "md": "p-4",
    "lg": "p-6"
};
const variantStyles = {
    "primary": "bg-yellow-300 text-black",
    "secondary": "bg-red-300 text-black"
};
const defaultStyles = "rounded-md flex";
const Button = (props) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>{props.startIcon ? <div className="pr-3">{props.startIcon}</div> : null}{props.text}{props.endIcon}</button>;
};
exports.Button = Button;
<exports.Button variant="primary" size="md" onClick={() => { }} text={"asd"}/>;
