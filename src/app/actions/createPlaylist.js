export const CreatePlaylist = async (userId1, userId2) => {
  console.log(userId1)
  console.log(userId2)
  try {
    const response = await fetch(
      `https://network-spotify-backend.onrender.com/profile/create/shared-playlists`,
      {
        method: "POST",
        headers: {
          //Authorization: `Bearer ${accessToken}`
          "content-type": "application/json",
        },
        body: JSON.stringify({ userId1, userId2 }),
      }
    );
    const parsed = await response.json()
    console.log(parsed)
    if (response.ok) {
      return { success: true };
    }
  } catch {
    return { success: false };
  }
};
