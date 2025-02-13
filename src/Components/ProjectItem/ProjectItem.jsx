import "./ProjectItem.css"
export default function ProjectItem(props)
{
    const styles = {
        backgroundImage: `url(${props.image})`,
      };
      
    return(
        <div className="project-container" onClick={() => window.open(props.url, "_blank")}>
            <div className="text-container">
                <h3>{props.title}</h3>
                <h7>{`Tech Stack: ${props.language}`}
                </h7>
                <p>{props.description}</p>
                <div className="attributes-conatiner">
                    <div className="attributes">
                        <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ForkedRepository.svg" alt="" />
                        <p>{props.forks}</p>
                    </div>
                    <div className="attributes">
                        <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/StarredRepository.svg" alt="" />
                        <p>{props.stars}</p>
                    </div>
                    <div className="attributes">
                        <img src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/IssueNeutral.svg" alt="" />
                        <p>{props.issues}</p>
                    </div>
                </div>
                
            </div>
            <div className="project-image" style={styles} ></div>
        </div>
    )
}