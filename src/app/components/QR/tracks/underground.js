import { Badge } from "@/shadcomponents/ui/badge";

export default function Underground({ score }) {
  let color = "bg-green-600";
  let label = "🎧 Extremely Underground";
  let intScore = Math.floor(score)
  if (score > 70) {
    color = "bg-red-500";
    label = "📻 Mainstream Listener";
  } else if (score > 50) {
    color = "bg-purple-500";
    label = "🔄 Balanced Taste";
  } else if (score > 30) {
    color = "bg-blue-500";
    label = "🌊 Pretty Underground";
  }

  return (
    <Badge className={`text-white ${color} text-sm font-semibold font-mono`}>
      {label}
    </Badge>
  );
}
