import { useParams } from "react-router-dom";

function Profile() {
    const { username } = useParams();

    return (
        <div>
            <h1>Perfil de {username}</h1>
        </div>
    );
}

export default Profile;
