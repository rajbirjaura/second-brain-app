import type { ReactElement } from "react";

export const SidebarItem = ({icon,text}:{
    text:string;
    icon:ReactElement;
})=>{
    return <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded mr-6 transition-all">
        <div className="p-2 text-gray-100">
        {icon}
        </div>
        <div className="p-1">
        {text}
        </div>
    </div>
}