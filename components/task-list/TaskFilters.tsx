"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categories = [
  "Machine Learning",
  "Computer Vision",
  "NLP",
  "Robotics",
  "Data Science",
  "AI Ethics",
];

const prizeRanges = [
  "Under $5,000",
  "$5,000 - $20,000",
  "$20,000 - $50,000",
  "Over $50,000",
];

export function TaskFilters() {
  const [activeFilter, setActiveFilter] = useState("active");

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="search"
          placeholder="Search challenges..."
          className="w-full pl-10 bg-black/40 border-purple-500/20 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeFilter === "active" ? "default" : "outline"}
          onClick={() => setActiveFilter("active")}
          className={
            activeFilter === "active"
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "border-purple-500/20 bg-black text-white hover:text-white hover:bg-purple-600/10"
          }
        >
          Active
        </Button>
        <Button
          variant={activeFilter === "upcoming" ? "default" : "outline"}
          onClick={() => setActiveFilter("upcoming")}
          className={
            activeFilter === "upcoming"
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "border-purple-500/20 bg-black text-white hover:text-white hover:bg-purple-600/10"
          }
        >
          Upcoming
        </Button>
        <Button
          variant={activeFilter === "past" ? "default" : "outline"}
          onClick={() => setActiveFilter("past")}
          className={
            activeFilter === "past"
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "border-purple-500/20 bg-black text-white hover:text-white hover:bg-purple-600/10"
          }
        >
          Past
        </Button>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="bg-black/40 border-purple-500/20 text-gray-300 hover:border-purple-500 cursor-pointer"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white mb-3">Prize Range</h3>
        <div className="flex flex-wrap gap-2">
          {prizeRanges.map((range) => (
            <Badge
              key={range}
              variant="outline"
              className="bg-black/40 border-purple-500/20 text-gray-300 hover:border-purple-500 cursor-pointer"
            >
              {range}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
