import {Menu} from "antd";
export default function MenuPage(){
    return(
    <div>
        <Menu items={[
            {label:"Home",key:"home"},
            {label:"Vehicle Management",key:"vehicle"},
            {label:"Reports",key:"reports"},
            {label:"Logout",key:"logout"},
        ]}></Menu>
    </div>);
}