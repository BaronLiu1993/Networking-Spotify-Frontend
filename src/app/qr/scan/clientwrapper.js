"use client";

import { useRef, useEffect, useState } from "react";
import Artist from "@/app/components/QR/artist/artist";
import Tracks from "@/app/components/QR/tracks/tracks";
import Profiles from "@/app/components/profiles/profiles";

export default function ClientWrapper({ syncData, syncUserData }) {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrollingRef = useRef(false);

  const scrollToIndex = (index) => {
    if (index < 0 || index >= sectionRefs.length) return;
    setActiveIndex(index);
    isScrollingRef.current = true;
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  const handleWheel = (e) => {
    if (isScrollingRef.current) return;
    if (e.deltaY > 50) scrollToIndex(activeIndex + 1);
    else if (e.deltaY < -50) scrollToIndex(activeIndex - 1);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);
  console.log(syncData);
  return (
    <div className="h-screen overflow-hidden">
      <div ref={sectionRefs[0]}>
        <Artist
          artistData={syncData.data.artists.spotifyArtistData2}
          score={syncData.data.artistScore.score2}
          userData={syncData.data.userData.user2}
        />
      </div>
      <div ref={sectionRefs[1]}>
        <Artist
          artistData={syncData.data.artists.spotifyArtistData1}
          score={syncData.data.artistScore.score1}
          userData={syncData.data.userData.user1}
        />
      </div>
      <div ref={sectionRefs[2]}>
        <Tracks
          trackData={syncData.data.tracks.spotifyTrackData1}
          score={syncData.data.trackScore.score1}
          userData={syncData.data.userData.user1}
        />
      </div>
      <div ref={sectionRefs[3]}>
        <Tracks
          trackData={syncData.data.tracks.spotifyTrackData2}
          score={syncData.data.trackScore.score2}
          userData={syncData.data.userData.user2}
        />
      </div>
      <div ref={sectionRefs[4]}>
        <Profiles
          spotifyData={syncData.data.userData}
          userData={syncUserData.data}
        />
      </div>
    </div>
  );
}
