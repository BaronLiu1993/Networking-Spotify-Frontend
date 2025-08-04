// app/api/login/route.ts
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const response = await fetch("https://network-spotify-backend.onrender.com/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const tokenData = await response.json();

    const res = NextResponse.json({ userId: tokenData.userId });

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, 
      path: "/",
    };

    res.cookies.set("access_token", tokenData.access_token, cookieOptions);
    res.cookies.set("refresh_token", tokenData.refresh_token, cookieOptions);
    res.cookies.set("userId", tokenData.userId, cookieOptions);

    return res;
  } catch (err) {
    console.error("Login API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
