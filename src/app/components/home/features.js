import { Badge } from "@/shadcomponents/ui/badge";

export default function Features() {
  return (
    <>
      <div className="bg-[#191414] font-lexend text-neutral-800 h-fit flex flex-col">
        <div className="bg-purple-300 w-full rounded-xl p-4 m-1">
          <div className="font-mono text-sm flex justify-between">
            <span>HOW IT WORKS</span>
            <span>01</span>
          </div>
          <div className="text-2xl font-bold">1 QR CODE, AN ENTIRE PROFILE</div>
          <div>
            <span className="font-light text-sm">
              It’s our culture. It’s our values. It’s who we are and what we’re
              not. It’s why we do things the way we do and why that matters.
              It’s all here in our band manifesto.
            </span>
            <button></button>
          </div>
        </div>
        <div className="bg-purple-300 w-full rounded-xl p-4 m-1 flex flex-col gap-4">
          <div>
            <div className="font-mono text-sm flex justify-between">
              <span>WHAT IT DOES</span>
              <span>02</span>
            </div>
            <div className="text-2xl font-bold">LEARN ABOUT...</div>
          </div>
          <div className="space-x-2">
            <Badge>🎨 Top Artists</Badge>
            <Badge>🎼 Top Tracks</Badge>
            <Badge>📚 Major</Badge>
            <Badge>🏐 Hobbies</Badge>
            <Badge>🎶 Music Compatibility</Badge>
          </div>
        </div>
        <div className="bg-purple-300 w-full rounded-xl p-4 m-1">
          <div className="font-mono text-sm flex justify-between">
            <span>BREAK THE ICE</span>
            <span>03</span>
          </div>
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              WITH YOUR NEW FRIEND YOU CAN...
            </div>
            <div className="flex gap-2">
              <div className="w-[20rem] h-[5rem] bg-neutral-100 hover:bg-neutral-50 rounded-xl flex flex-col items-center justify-center p-2">
                <span className="text-xs font-bold">Create Playlists</span>
                <div className="text-light text-xs">
                  It’s why we do things here in our band manifesto.
                </div>
              </div>
              <div className="w-[20rem] h-[5rem] bg-neutral-100 hover:bg-neutral-50 rounded-xl flex flex-col items-center justify-center p-2">
                <span className="text-xs font-bold">Discover New Artists</span>
                <div className="text-light text-xs">
                  It’s why we do things the way we do and why that matters.
                </div>
              </div>
              <div className="w-[20rem] h-[5rem] hover:bg-neutral-50 bg-neutral-100 rounded-xl flex flex-col items-center justify-center p-2">
                <span className="text-xs font-bold">Exchange SNS</span>
                <div className="text-light text-xs">
                  It’s why we do things the way we do and why that matters.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
