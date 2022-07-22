import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <span onClick={() => logout()}>
                Logout
            </span>
        ))
};

export default LogoutButton;