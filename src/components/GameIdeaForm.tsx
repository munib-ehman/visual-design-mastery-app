import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import DropdownFilter from "./DropdownFilter";
import { Textarea } from "./ui/textarea";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define genres and markets for the filters
const genres = [
  { label: "Action", value: "action" },
  { label: "Adventure", value: "adventure" },
  { label: "RPG", value: "rpg" },
  { label: "Strategy", value: "strategy" },
  { label: "Simulation", value: "simulation" },
  { label: "Puzzle", value: "puzzle" },
  { label: "Sports", value: "sports" },
  { label: "Racing", value: "racing" },
  { label: "Horror", value: "horror" },
  { label: "Open World", value: "open-world" },
];

const markets = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "gb" },
  { label: "Canada", value: "ca" },
  { label: "Australia", value: "au" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "India", value: "in" },
  { label: "Japan", value: "jp" },
  { label: "South Korea", value: "kr" },
  { label: "Brazil", value: "br" },
  { label: "Mexico", value: "mx" },
  { label: "Russia", value: "ru" },
  { label: "Pakistan", value: "pk" },
  { label: "Saudi Arabia", value: "sa" },
  { label: "Indonesia", value: "id" },
  { label: "Italy", value: "it" },
  { label: "Spain", value: "es" },
  { label: "Netherlands", value: "nl" },
  { label: "Turkey", value: "tr" },
  { label: "Philippines", value: "ph" },
  { label: "Thailand", value: "th" },
  { label: "Vietnam", value: "vn" },
  { label: "Malaysia", value: "my" },
  { label: "Egypt", value: "eg" },
  { label: "Nigeria", value: "ng" },
  { label: "South Africa", value: "za" },
];

type LoadingScreenProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GameIdeaForm: React.FC<LoadingScreenProps> = ({
  setIsLoading,
}) => {
  const navigate = useNavigate();

  const [concept, setConcept] = useState("");
  const [genre, setGenre] = useState("");
  const [market, setMarket] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concept.trim()) {
      toast.error("Please enter a game concept");
      return;
    }
    setIsLoading(true);
    const payload = {
      idea: concept,
      genre: genre,
      country: market,
    };

    const response = await fetch(`${apiUrl}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    navigate("/analytics", { state: { result } });
    setIsLoading(false);

    toast.success("Report Generated Successfully!");

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
