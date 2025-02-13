import "./Navbar.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2>Shashank S</h2>
            <div className={isOpen ? 'nav-links-shown' : 'nav-links'}>
                <p onClick={() => {
                    props.click_skill();
                    setIsOpen(false);
                }}>Skills</p>
                {!isOpen && <span className="separator">|</span>}
                <p onClick={() => {
                    props.click_proj();
                    setIsOpen(false);
                }}>Projects</p>
                {!isOpen && <span className="separator">|</span>}
                <p onClick={() => {
                    props.click_cont();
                    setIsOpen(false);
                }}>Contact</p>
            </div>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
        </nav>
    );
}