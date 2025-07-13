"use server"

import { cookies } from "next/headers";

export const Logout = async () => {
  const cookieStore = cookies();

  cookieStore.set("access_token", "", {
    path: "/",
    maxAge: 0,
  });

  cookieStore.set("userId", "", {
    path: "/",
    maxAge: 0,
  });

  cookieStore.set("refresh_token", "", {
    path: "/",
    maxAge: 0,
  });
};
