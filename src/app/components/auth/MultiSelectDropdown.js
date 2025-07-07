"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/shadcomponents/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcomponents/ui/popover";
import { Button } from "@/shadcomponents/ui/button";
import { Badge } from "@/shadcomponents/ui/badge";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

const OPTIONS = [
  "🏐 Volleyball",
  "🏀 Basketball",
  "🏋️ Gym/Fitness",
  "🥾 Hiking",
  "📸 Photography",
  "🎨 Drawing",
  "🎸 Guitar",
  "🎤 Singing",
  "📚 Reading",
  "✍️ Writing",
  "🍳 Cooking",
  "🎮 Video Games",
  "💻 Coding",
  "🌍 Traveling",
  "🛍️ Thrifting",
];

export default function MultiSelectDropdown({ value = [], onChange }) {
  const [open, setOpen] = useState(false);

  const toggleItem = (item) => {
    const newSelection = value.includes(item)
      ? value.filter((v) => v !== item)
      : [...value, item];
    onChange(newSelection);
  };

  const addCustomItem = (input) => {
    if (!value.includes(input)) {
      onChange([...value, input]);
    }
    setOpen(false);
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full rounded-xs justify-start bg-white hover:bg-white"
          >
            {value.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {value.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            ) : (
              "Select Interests"
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command className="font-lexend">
            <CommandInput placeholder="Search or add..." />
            <CommandEmpty className="p-2">
              <Button
                variant="ghost"
                className="justify-start w-full text-xs"
                onClick={(e) => {
                  const value =
                    e.currentTarget
                      .closest("[cmdk-root]")
                      ?.querySelector("input")?.value || "";
                  if (value.trim()) addCustomItem(value.trim());
                }}
              >
                <Plus className="mr-2 h-4 w-4" /> Add As Custom Entry
              </Button>
            </CommandEmpty>
            <CommandGroup className="h-[20rem] overflow-auto">
              {OPTIONS.map((item) => (
                <CommandItem key={item} onSelect={() => toggleItem(item)}>
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      value.includes(item) ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
