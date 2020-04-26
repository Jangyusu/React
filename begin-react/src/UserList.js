import React from "react";

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: "a",
            email: "a@gmaile.com"
        },
        {
            id: 2,
            username: "b",
            email: "b@gmaile.com"
        },
        {
            id: 3,
            username: "c",
            email: "c@gmaile.com"
        }
    ];

    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    );
}

export default UserList;