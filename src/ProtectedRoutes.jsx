import React from "react";
import { useAuth } from "hooks/use-auth";
import { ClientRegistration } from "components/ClientRegistration/ClientRegistration";
import { Outlet } from "react-router-dom";

export function ProtectedRoutes() {
    const { isAuth } = useAuth();
    console.log(isAuth);
    return isAuth ? <Outlet /> : <ClientRegistration />;

}