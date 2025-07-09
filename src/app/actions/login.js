"use server";

export async function SendLogin(email, password) {
  try {
    const response = await fetch(
      "https://1061-166-48-48-44.ngrok-free.app/auth/login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const tokenData = await response.json();
    const userData = await fetch("", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });
    const userId = await userData.json();
    return userId;
  } catch (err) {
    console.log(err);
  }
}
