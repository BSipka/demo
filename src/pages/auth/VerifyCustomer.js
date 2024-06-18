import React from "react";

function VerifyCustomer() {
  return <div>VerifyCustomer</div>;
}

export default VerifyCustomer;

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const token = searchParams.get("token");

  const res = fetch("http://localhost:8000/verify?token=" + token)
    .then(console.log())
    .catch(console.error());

  return res;
}
