import React from 'react';
import './UserCard.css';  

const UserCard = ({ user }) => {
    return (
        <div className="card">
            <h2 className="username">{user.name}</h2>
            <p className="email">{user.email}</p>
        </div>
    );
};

export default UserCard;
