import { Mainlogo } from "../icons/Mainlogo"
import { Twitter } from "../icons/Twitter"
import { Youtube } from "../icons/Youtube"
import { SidebarItem } from "./SidebatItem"

export const Sidebar = ()=>{
    return <div className="h-screen bg-white border-r-2 border-gray-400 w-72 fixed top-0 left-0 pt-4 pl-6">
        <div className="flex text-3xl items-center gap-2 ">
            <span className="text-purple-500"><Mainlogo/></span>
            <h1>Brainly</h1>
            
        </div>
        <div className="pt-4">
            <SidebarItem text="Twitter" icon={<Twitter/>}/>
            <SidebarItem text="Youtube" icon={<Youtube/>}/>
        </div>
    </div>
}