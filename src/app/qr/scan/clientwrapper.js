"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Artist from "@/app/components/QR/artist/artist";
import Tracks from "@/app/components/QR/tracks/tracks";
import Profiles from "@/app/components/profiles/profiles";

const SECTION_HEIGHT = typeof window !== "undefined" ? window.innerHeight : 800;

export default function ClientWrapper({ userId1, userId2, syncData, syncUserData }) {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimatingRef = useRef(false);

  const scrollToIndex = async (index) => {
    if (index < 0 || index > 4 || isAnimatingRef.current) return;

    setActiveIndex(index);
    isAnimatingRef.current = true;
    await controls.start({ y: -index * SECTION_HEIGHT, transition: { duration: 0.6, ease: "easeInOut" } });
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 700); // buffer time to prevent spam swipes
  };

  const handleWheel = (e) => {
    if (isAnimatingRef.current) return;
    if (e.deltaY > 40) scrollToIndex(activeIndex + 1);
    else if (e.deltaY < -40) scrollToIndex(activeIndex - 1);
  };

  const handleDragEnd = (event, info) => {
    const offset = info.offset.y;
    if (offset < -80) scrollToIndex(activeIndex + 1); 
    else if (offset > 80) scrollToIndex(activeIndex - 1); 
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  return (
    <div className="h-screen overflow-hidden touch-none">
      <motion.div
        animate={controls}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        className="h-screen w-full"
        style={{ height: `${SECTION_HEIGHT * 5}px` }} // total height
      >
        <div className="h-screen">
          <Artist
            artistData={syncData.data.artists.spotifyArtistData2}
            score={syncData.data.artistScore.score2}
            userData={syncData.data.userData.user2}
          />
        </div>
        <div className="h-screen">
          <Artist
            artistData={syncData.data.artists.spotifyArtistData1}
            score={syncData.data.artistScore.score1}
            userData={syncData.data.userData.user1}
          />
        </div>
        <div className="h-screen">
          <Tracks
            trackData={syncData.data.tracks.spotifyTrackData1}
            score={syncData.data.trackScore.score1}
            userData={syncData.data.userData.user1}
          />
        </div>
        <div className="h-screen">
          <Tracks
            trackData={syncData.data.tracks.spotifyTrackData2}
            score={syncData.data.trackScore.score2}
            userData={syncData.data.userData.user2}
          />
        </div>
        <div className="h-screen">
          <Profiles
            spotifyData={syncData.data.userData}
            userData={syncUserData.data}
            userId1={userId1}
            userId2={userId2}
          />
        </div>
      </motion.div>
    </div>
  );
}
