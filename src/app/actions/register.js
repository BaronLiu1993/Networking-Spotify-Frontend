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
      "https://network-spotify-backend.onrender.com/auth/register",
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
