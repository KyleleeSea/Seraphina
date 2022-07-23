import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    // isAuthenticated check hides button if user is not authenticated (logged in).

    return (
        isAuthenticated && (
            <span onClick={() => logout()}>
                Logout
            </span>
        ))
};

export default LogoutButton;