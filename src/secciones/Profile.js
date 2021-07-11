import React from "react";
import { useParams } from "react-router";

const Profile = () => {
    const {username} = useParams();
    return (
        <div className="bg-info">
            <p>...</p>
            <p>...</p>
            
          
            <h1>Perfil de usuario {username}</h1>
        </div>
    )
}

export default Profile