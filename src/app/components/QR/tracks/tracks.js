import { Button } from "@/shadcomponents/ui/button";
import { Music } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Underground from "./underground";
import Popularity from "./popularity";

export default function Tracks({ trackData, score, userData }) {
  return (
    <>
      <div className="font-lexend">
        <div className="p-10 bg-white">
          <div className="flex flex-col gap-4 py-4">
            <h1 className="text-2xl font-mono">
              LiuLiuLiuLiu's Track List is...
            </h1>
            <Underground score={score} />
          </div>
          <div className="flex flex-col gap-4">
            {trackData.map((data) => (
              <div className = "bg-[#F8F8F8] p-4 rounded-sm hover:bg-gray-200" key={data.id}>
                <div className="flex items-center gap-4">
                  <Image
                    src={data.image}
                    alt="Track image"
                    width={128}
                    height={128}
                    className="rounded-xs object-cover"
                  />
                  <div className = "flex flex-col gap-4">
                    <div>
                      <Popularity score={data.popularity} />
                      <div>{data.name}</div>
                      <div className="font-light text-sm">{`By ${data.artist}`}</div>
                    </div>
                    <div>
                      <Link href={data.uri}>
                        <Button className="flex items-center justify-center rounded-xs bg-white border-2 border-[#004875] text-[#004875] hover:bg-[#004875] hover:text-white">
                          <span>listen</span>
                          <Music />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
