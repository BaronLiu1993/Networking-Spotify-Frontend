"use client";

import { useState, useEffect, useRef } from "react";
import Underground from "./underground";
import Image from "next/image";
import Popularity from "./popularity";
import { Button } from "@/shadcomponents/ui/button";
import { Badge } from "@/shadcomponents/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Artist({ artistData, score, userData }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(artistData.length / itemsPerPage);
  const paginated = [];

  for (let i = 0; i < artistData.length; i += itemsPerPage) {
    paginated.push(artistData.slice(i, i + itemsPerPage));
  }

  useEffect(() => {
    const calculateItemsPerPage = () => {
      if (containerRef.current && cardRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        const cardHeight = cardRef.current.clientHeight + 24;
        const maxItems = Math.floor(containerHeight / cardHeight);
        setItemsPerPage(Math.max(1, maxItems));
      }
    };

    calculateItemsPerPage();
    window.addEventListener("resize", calculateItemsPerPage);
    return () => window.removeEventListener("resize", calculateItemsPerPage);
  }, []);

  const handleTap = (e) => {
    const x =
      "clientX" in e
        ? e.clientX
        : e.touches && e.touches.length > 0
        ? e.touches[0].clientX
        : 0;
    const screenWidth = window.innerWidth;
    if (x < screenWidth / 2) {
      if (currentPage > 0) setCurrentPage(currentPage - 1);
    } else {
      if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full font-lexend bg-[#F1F1EF] border-1 m-1 rounded-md overflow-hidden"
      onClick={handleTap}
      onTouchStart={handleTap}
    >
      <div className="absolute top-4 left-0 right-0 z-20 px-4 flex gap-1">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <div
            key={idx}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              idx === currentPage ? "bg-black" : "bg-[#E0E0E0]"
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 space-y-4 overflow-y-auto h-full pt-6 pb-20 text-xs sm:text-sm">
        {/* Header */}
        <div className="text-sm sm:text-base font-mono py-2 flex items-center gap-2">
          {userData.image ? (
            <Image
              className="rounded-full"
              src={userData.image}
              alt="pfp"
              width={28}
              height={28}
            />
          ) : (
            <div className="w-[28px] h-[28px] rounded-full bg-gray-200" />
          )}
          <span>{userData.name} Top Artists</span>
        </div>

        <Underground score={score} />

        {/* Cards */}
        <AnimatePresence mode="wait">
          {paginated[currentPage].map((data, idx) => (
            <motion.div
              key={data.name}
              ref={idx === 0 ? cardRef : null}
              className="p-4 rounded-md shadow border bg-[#F9F9F9] hover:shadow-md hover:scale-[1.02] transition-transform duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <div className="flex flex-row gap-4 sm:gap-6">
                <Image
                  src={data.image}
                  alt="Profile image"
                  width={96}
                  height={96}
                  className="rounded object-cover shrink-0"
                />
                <div className="flex flex-col gap-2 min-w-0">
                  <Popularity score={data.popularity} />
                  <div className="font-semibold text-xs sm:text-sm truncate">
                    {data.name} – {data.followers.toLocaleString()} Followers
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {data.genre.map((genres, i) => (
                      <Badge
                        className="text-[10px] sm:text-xs bg-[#E6F5FC] text-[#004875] border-[#004875] border-2"
                        key={i}
                      >
                        {genres}
                      </Badge>
                    ))}
                  </div>
                  <Link href={data.uri} target="_blank">
                    <Button className="flex items-center justify-center rounded-xs bg-white border-2 border-[#004875] text-[#004875] hover:bg-[#004875] hover:text-white w-fit mt-2 text-[10px] sm:text-xs">
                      <span>discover discography</span>
                      <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
