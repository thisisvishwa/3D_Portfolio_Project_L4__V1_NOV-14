```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectDetails = () => {
    const [projectDetails, setProjectDetails] = useState({});

    useEffect(() => {
        fetchProjectDetails();
    }, []);

    const fetchProjectDetails = async () => {
        try {
            const response = await axios.get('/api/projectDetails');
            setProjectDetails(response.data);
        } catch (error) {
            console.error(`Error fetching project details: ${error}`);
        }
    };

    return (
        <div className="project-details">
            <h2>{projectDetails.name}</h2>
            <p>{projectDetails.description}</p>
            <h3>Technology Stack</h3>
            <ul>
                {projectDetails.techStack && projectDetails.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <h3>Features</h3>
            <ul>
                {projectDetails.features && projectDetails.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectDetails;
```