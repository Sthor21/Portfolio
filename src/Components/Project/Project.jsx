import ProjectItem from "../ProjectItem/ProjectItem" 
import { useState, useEffect } from "react";
import "./Project.css"
import deafult_img from "../../Assets/placeholder.svg"
export default function Project(props){
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/Sthor21/repos")
        .then((response) => response.json())
        .then((data) => setRepos(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    const array_id = [890386335, 895888510, 895877098];
    const project_list = repos
        .filter((pro) => array_id.includes(pro.id)) // ✅ Filter valid projects
        .map((pro) => ( // ✅ Now map over filtered projects to render JSX
            <ProjectItem
            key={pro.id}
            title={pro.name}
            description={pro.description}
            stars={pro.stargazers_count}
            forks={pro.forks}
            issues={pro.open_issues_count}
            language={pro.language}
            url={pro.html_url} // ✅ Corrected
            image={deafult_img}
            />
        ));

    return(
        <div className="project-section" ref={props.section}>
            <div className="project-display">
                <h1>PROJECTS</h1>
                {project_list}
            </div>
        </div>
    )

}