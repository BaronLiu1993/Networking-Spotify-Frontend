"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Artist from "@/app/components/QR/artist/artist";
import Tracks from "@/app/components/QR/tracks/tracks";
import Profiles from "@/app/components/profiles/profiles";

export default function ClientWrapper({ userId1, userId2, syncData, syncUserData }) {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight || 800);
  const isAnimatingRef = useRef(false);
  const touchStartY = useRef(0);

  const sectionCount = 5;

  useEffect(() => {
    const updateHeight = () => {
      setSectionHeight(window.innerHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const scrollToIndex = async (index) => {
    if (index < 0) index = 0;
    else if (index >= sectionCount) index = sectionCount - 1;

    if (isAnimatingRef.current) return;

    setActiveIndex(index);
    isAnimatingRef.current = true;

    await controls.start({
      y: -index * sectionHeight,
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 700);
  };

  const handleWheel = (e) => {
    if (isAnimatingRef.current) return;
    if (e.deltaY > 40) scrollToIndex(activeIndex + 1);
    else if (e.deltaY < -40) scrollToIndex(activeIndex - 1);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaY) < 50 || isAnimatingRef.current) return;

    if (deltaY < 0) scrollToIndex(activeIndex + 1);
    else scrollToIndex(activeIndex - 1);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex, sectionHeight]);

  return (
    <>
    
      <div className="fixed inset-0 z-0 bg-white overflow-hidden touch-none">
        <motion.div
          animate={controls}
          className="w-full"
          style={{
            height: sectionHeight * sectionCount,
            overflow: "hidden",
          }}
        >
          {[ 
            <Artist
              key="artist2"
              artistData={syncData.data.artists.spotifyArtistData2}
              score={syncData.data.artistScore.score2}
              userData={syncData.data.userData.user2}
            />,
            <Artist
              key="artist1"
              artistData={syncData.data.artists.spotifyArtistData1}
              score={syncData.data.artistScore.score1}
              userData={syncData.data.userData.user1}
            />,
            <Tracks
              key="tracks1"
              trackData={syncData.data.tracks.spotifyTrackData1}
              score={syncData.data.trackScore.score1}
              userData={syncData.data.userData.user1}
            />,
            <Tracks
              key="tracks2"
              trackData={syncData.data.tracks.spotifyTrackData2}
              score={syncData.data.trackScore.score2}
              userData={syncData.data.userData.user2}
            />,
            <Profiles
              key="profiles"
              spotifyData={syncData.data.userData}
              userData={syncUserData.data}
              userId1={userId1}
              userId2={userId2}
            />,
          ].map((Component, i) => (
            <div
              key={i}
              style={{ height: sectionHeight }}
              className="w-full m-0 p-0"
            >
              {Component}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}