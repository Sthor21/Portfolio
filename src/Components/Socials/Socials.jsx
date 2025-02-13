import { Linkedin,Instagram,Github,Mail,ChevronRight } from "lucide-react"
import "./Socials.css"
export default function Socials(props){
    return(
        <div className="icons-container" ref={props.section}>
            <h1><i>Let's Connect</i></h1>
            <div className="icons-display" >
                <div className="elements" onClick={() => window.open("https://www.linkedin.com/in/shashank-s-391a58266/", "_blank")}><Linkedin size={32} className="lucide"/><span>Linkedin</span></div>
                <div className="elements"onClick={() => window.open("https://www.instagram.com/prime_295/", "_blank")}><Instagram size={32} className="lucide"/><span>Instagram</span></div>
                <div className="elements"onClick={() => window.open("mailto:someone@example.com", "_blank")}><Mail size={32} className="lucide"/><span>Email</span></div>
                <div className="elements"onClick={() => window.open("https://github.com/Sthor21", "_blank")}><Github size={32} className="lucide"/><span>Github</span></div>
                <div className="elements"onClick={() => window.open("https://leetcode.com/u/Shashank_thor/", "_blank")}><ChevronRight size={32} className="lucide"/><span>Leetcode</span></div>
            </div>
        </div>
        
    
    )
}