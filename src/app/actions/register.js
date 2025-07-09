"use server";

export async function SendRegister(
  email,
  password,
  firstName,
  lastName,
  year,
  major,
  college,
  interests
) {
  try {
    const response = await fetch(
      "https://18158ab10499.ngrok-free.app/auth/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          major,
          year,
          college,
          interests,
        }),
      }
    );

    const urlData = await response.json()
    return urlData.url
  } catch (err) {
    console.log(err)
  }
}
