import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className="font-lexend bg-[#191414] text-[#FFFFFF] font-light p-4">
        <div className = "border-t py-4">
          <div className="text-xs flex justify-between">
            <span>Made By Jie Xuan Liu @ UofT</span>
            <div className="flex gap-2">
              <Instagram className="h-4 w-4" />
              <Linkedin className="h-4 w-4" />
              <Github className="h-4 w-4" />
            </div>
          </div>
          <div className="text-xs">
            Important❗: Your Spotify Data is NEVER Saved on Any Database
          </div>
        </div>
      </div>
    </>
  );
}
