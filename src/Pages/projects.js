import React from "react";
import projectCard from "../Components/projectCard";

const Projects = () => {
    return(
        <div>
            <h3>Projects</h3>
            <div className="project-card-container">
                <projectCard projectCard = {projectCard}/>
            </div>
        </div>
    )
}

export default Projects;