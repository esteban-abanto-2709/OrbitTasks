import { useParams } from "react-router-dom";

function Project() {
    const { username, project } = useParams();

    return (
        <div>
            <h1>Perfil de {username}</h1>
            <p>Proyecto: {project}</p>
        </div>
    );
}

export default Project;
