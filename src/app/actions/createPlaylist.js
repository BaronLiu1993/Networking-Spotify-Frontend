export const CreatePlaylist = async (userId1, userId2) => {
  try {
    const response = await fetch(
      `https://18158ab10499.ngrok-free.app/profile/create/shared-playlists`,
      {
        method: "POST",
        headers: {
          //Authorization: `Bearer ${accessToken}`
          "content-type": "application/json",
        },
        body: JSON.stringify({ userId1, userId2 }),
      }
    );
    if (response.ok) {
      return { success: true };
    }
  } catch {
    return { success: false };
  }
};
