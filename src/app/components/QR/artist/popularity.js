import { Badge } from "@/shadcomponents/ui/badge";

export default function Popularity({ score }) {
  let color = "bg-green-500";
  let label = "🌟 Global Star";

  if (score < 90) {
    color = "bg-yellow-500";
    label = "🔥 Trending";
  }
  if (score < 70) {
    color = "bg-blue-500";
    label = "🌱 Rising Artist";
  }
  if (score < 50) {
    color = "bg-gray-500";
    label = "🎧 Underground";
  }

  return (
    <Badge className={`text-white ${color}`}>
      {label}
    </Badge>
  );
}
