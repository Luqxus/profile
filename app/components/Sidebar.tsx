"use client"
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

interface ItemsProps {
    index: number,
    label: string,
    link: string,
    selected: boolean,
    onPress: Dispatch<SetStateAction<number>>
}

const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const items = [{label: "Home", link: "#home"}, {label:"About", link: "#about"}, {label: "Services", link:"#service"}, {label:"Work", link:"#work"}, {label:"Blogs", link:"#blogs"}, {label:"Contact", link:"#contact"}];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobile) {
        return (
            <>
                {/* Mobile Header */}
                <div className="fixed  top-0 left-0 right-0 flex justify-between items-center p-4 bg-black text-white z-50 animate-slide-down">
                    <p className="font-bold text-xl animate-fade-in">Luc.</p>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 hover:rotate-180 transition-transform duration-300"
                    >
                        {isMenuOpen ? <X size={24} className="animate-spin-in" /> : <Menu size={24} className="animate-spin-in" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed  inset-0 bg-black bg-opacity-95 z-40 pt-16 animate-fade-in">
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {items.map((item, index) => (
                                <div key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                                    <ItemComponent
                                        label={item.label}
                                        link={item.link}
                                        selected={index === selectedIndex}
                                        onPress={(idx) => {
                                            setSelectedIndex(idx as number);
                                            setIsMenuOpen(false);
                                        }}
                                        index={index}
                                    />
                                </div>
                            ))}
                            <div className="mt-8 animate-slide-up">
                                <Socials />
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Bottom Navigation */}
                <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 animate-slide-up">
                    <div className="flex justify-around items-center">
                        {items.slice(0, 4).map((item, index) => (
                            <div key={index} className="animate-bounce-in" style={{ animationDelay: `${index * 100}ms` }}>
                                <ItemComponent
                                    label={item.label}
                                    link={item.link}
                                    selected={index === selectedIndex}
                                    onPress={setSelectedIndex}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }

    // Desktop Sidebar
    return (
        <div className="hidden md:flex flex-col h-screen w-32 fixed left-0 items-center justify-between p-6 bg-black text-white animate-slide-in">
            <p className="font-bold text-xl animate-fade-in">Luc.</p>
            <div className="flex flex-col items-center justify-center gap-y-6 text-lg">
                {items.map((item, index) => (
                    <div key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                        <ItemComponent
                            label={item.label}
                            link={item.link}
                            selected={index === selectedIndex}
                            onPress={setSelectedIndex}
                            index={index}
                        />
                    </div>
                ))}
            </div>
            <div className="animate-slide-up">
                <Socials />
            </div>
        </div>
    );
};

const ItemComponent = (props: ItemsProps) => {
    return (
        <div
            onClick={() => props.onPress(props.index)}
            className={`cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg 
                       hover:bg-white/10 hover:scale-110 hover:-translate-y-1
                       ${props.selected ? 
                         "font-bold bg-white/5 shadow-lg scale-105" : 
                         "font-thin"}`}
        >
            <a href={props.link}><p>{props.label}</p></a>
        </div>
    );
};

const Socials = () => {
    const socials = [
        {
            Icon: Linkedin,
            link: "https://linkedin.com/in/lucas-lebelwane-87b377195",
            label: "LinkedIn"
        },
        {
            Icon: Github,
            link: "https://github.com/Luqxus",
            label: "GitHub"
        },
        {
            Icon: MessageCircle,
            link: "https://discord.com",
            label: "Discord"
        },
        {
            Icon: Twitter,
            link: "https://x.com",
            label: "X"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-y-4">
            {socials.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-white/10 hover:scale-125 transition-all duration-300"
                    aria-label={item.label}
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <item.Icon size={24} className="animate-bounce-in" />
                </a>
            ))}
        </div>
    );
};

export default Sidebar;