import { Badge } from "@/shadcomponents/ui/badge";

export default function Popularity({ score }) {
  console.log(score)
  let color = "bg-green-500";
  let label = "🌟 Hit";

  if (score < 80) {
    color = "bg-yellow-500";
    label = "🔥 Popular";
  }
  if (score < 70) {
    color = "bg-blue-500";
    label = "🌱 Trending";
  }
  if (score < 60) {
    color = "bg-gray-500";
    label = "🎧 Hidden track";
  }

  return (
    <Badge className={`text-white ${color} font-mono`}>
      {label}
    </Badge>
  );
}
