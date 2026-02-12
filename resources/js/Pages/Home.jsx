import React from "react";

export default function Home({ user }) {
    return (
        <div>
            <h1>Главная страница</h1>
            <p>Привет, {user.name}</p>
        </div>
    );
}
