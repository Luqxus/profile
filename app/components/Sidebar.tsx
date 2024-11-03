"use client"
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { SocialIcon } from "react-social-icons/component";
import 'react-social-icons/x'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/discord'


interface ItemsProps {
    index: number,
    label: string,
    selected: boolean,
    onPress: Dispatch<SetStateAction<number>>
}


const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const items = ["Home", "About", "Services", "Work", "Blogs", "Contact"];
    return <div className="flex flex-col h-full items-center justify-between p-6 bg-black text-white">
        <p className="font-bold text-xl">Luc.</p>
        <div className={"flex flex-col items-center justify-center gap-y-4 text-lg"}>{items.map((item, index) => <ItemComponent key={index} label={item} selected={index == selectedIndex} onPress={setSelectedIndex} index={index}/>)}</div>
        <Socials />
    </div>
}

const ItemComponent = (props: (ItemsProps)) => {
    return (
    <div
    onClick={() => {
        props.onPress(props.index);
    }}
     className={"flex items-center justify-center " + (props.selected ? "font-bold" : "font-thin")}>
        <p>{props.label}</p>
    </div>)
}



const Socials = () => {

    const socials = 
    [
        {
            label: "linkedin",
            link: "https://linkedin.com"
        }, 
        {
            label: "github", 
            link: "https://github.com/Luqxus"
        }, 
        {
            label: "discord",
            link:"https://discord.com"
        }, 
        {
            label: "x",
            link: "https://x.com"
        }
    ];

    return( 
        <div className="flex flex-col items-center justify-center gap-y-4">
            {socials.map((item, index) => <SocialIcon key={index} network={item.label} url={item.link} />)}
        </div>
    )
}





export default Sidebar;