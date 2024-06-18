import React from "react";
import { json, redirect } from "react-router-dom";
import AuthForm from "../../components/auth/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });

  console.log(JSON.stringify(authData));
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Autentikacija nije uspela" }, { status: 500 });
  }

  const token = response.data.token;
  localStorage.setItem("token", token);

  return redirect("/");
}
