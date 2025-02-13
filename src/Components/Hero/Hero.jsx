import "./Hero.css"
import resume from"../../Assets/Resume_V3 - Copy.pdf"
export default function Hero(props){
    return(
        <div className="hero">
            <div className="hero-display-section">
                <div className="img-section">
                </div>
                <div className="text-section">
                    <h1>Hello</h1>
                    <h3>A Bit About Me</h3>
                    <p>I'm a passionate third-year computer science engineering student with expertise in front-end development, especially React. 
                        Skilled in C and Java, I excel at building dynamic web applications and solving technical challenges.</p>
                    <div className="options">
                        <div className="option-elements" onClick={props.click_proj}>Projects</div>
                        <div className="option-elements" onClick={props.click_skill}>Skills</div>
                        <div className="option-elements" onClick={() => window.open(resume, "_blank")}>Resume</div>
                    </div>
                </div>
            </div>
        </div>
    )
}