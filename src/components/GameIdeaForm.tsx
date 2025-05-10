import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import DropdownFilter from "./DropdownFilter";
import { Textarea } from "./ui/textarea";
import { ArrowRight } from "lucide-react";

// Define genres and markets for the filters
const genres = [
  "Action",
  "Adventure",
  "RPG",
  "Strategy",
  "Simulation",
  "Puzzle",
  "Sports",
  "Racing",
  "Horror",
  "Open World",
];

const markets = [
  "Mobile",
  "PC",
  "Console",
  "VR/AR",
  "Web Browser",
  "Cross-platform",
];

export const GameIdeaForm: React.FC = () => {
  const [concept, setConcept] = useState("");
  const [genre, setGenre] = useState(genres[0]);
  const [market, setMarket] = useState(markets[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!concept.trim()) {
      toast.error("Please enter a game concept");
      return;
    }

    toast.success("Game concept submitted successfully!");

    // In a real app, this would send the data to a backend or AI service
    console.log({
      concept,
      genre,
      market,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-9"
    >
      <div>
        <Textarea
          rows={5}
          value={concept}
          onChange={(e) => setConcept(e.target.value)}
          placeholder="Type your wildest game concept here......"
          className="w-full px-5 py-5 text-sm text-[#B4B1B1] font-jakarta bg-[#1E1E1E] rounded-lg border-none focus:outline-none focus:right-0 shadow-[0_8px_12px_rgba(0,0,0,0.25)] "
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex flex-wrap gap-4">
          <DropdownFilter
            label="Primary Genre"
            options={genres}
            value={genre}
            onValueChange={setGenre}
          />
          <DropdownFilter
            label="Primary Market"
            options={markets}
            value={market}
            onValueChange={setMarket}
          />
        </div>

        <Button
          type="submit"
          className="bg-[#1E1E1E] hover:opacity-85  text-white px-6 rounded-lg "
        >
          Search <ArrowRight />
        </Button>
      </div>
    </form>
  );
};

export default GameIdeaForm;
