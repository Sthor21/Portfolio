import "./SkillItem.css"
import {nanoid} from"nanoid"
export default function SkillItem(props){
    const tags=props.items.map((item)=>(<button key={nanoid()}className="skill-button">{item}</button>))
    return(
        <div className="category-container">
            <div className="title-card">
                {props.icon}
                <h1>{props.category}</h1>
            </div>
            <div className="item-container">
                {tags}
            </div>
        </div>
    )
}
