"use client"

export default function OAuthButton() {
  const handleSpotifyAuth = () => {
    window.location.href = "http://localhost:7000/auth/oauth2/sync"; 
  };

  return (
    <button onClick={handleSpotifyAuth}>
        Sync with Spotify
    </button>
  )
}

