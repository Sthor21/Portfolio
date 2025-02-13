import "./Skills.css"
import SkillItem from "../SkillItem/SkillItem";
import{Code,Server,LayoutTemplate,Database}from "lucide-react"
export default function Skills(props){
    const skills = [
        {
          category: "Frontend",
          icon:<LayoutTemplate color="white"/>,
          items: ["HTML","CSS", "JavaScript", "React"]
        },
        {
          category: "Backend",
          icon : <Server color="white" />,
          items: ["REST API"]
        },
        {
          category: "Languages",
          icon:<Database color="white"/>,
          items: ["Java","C","MySQL"]
        },
        {
          category: "Tools",
          icon : <Code color="white"/>,
          items: ["Git"]
        }
      ];
    const array=skills.map((skill)=>(<SkillItem key= {skill.category} icon={skill.icon} items= {skill.items} category={skill.category}/>))
    return(
        <div className="scontainer" ref={props.section}>
            <h1>SKILLS</h1>
            <div className="skills-container">
                {array}
            </div>
        </div>
        
    )
}