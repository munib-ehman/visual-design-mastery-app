
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import DropdownFilter from "./DropdownFilter";

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
      market
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-6">
      <div>
        <input
          type="text"
          value={concept}
          onChange={(e) => setConcept(e.target.value)}
          placeholder="Type your wildest game concept here......"
          className="w-full px-4 py-5 text-lg text-white bg-black/80 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white/30"
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
          className="bg-black/80 hover:bg-black/90 text-white px-6"
        >
          Search with Filters
        </Button>
      </div>
    </form>
  );
};

export default GameIdeaForm;
