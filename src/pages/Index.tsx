
import React from "react";
import GameIdeaForm from "@/components/GameIdeaForm";
import { Toaster } from "@/components/ui/sonner";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-game-gradient p-4 md:p-8">
      <Toaster position="top-center" />
      
      <div className="w-full max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white">
            Your Next <span className="font-bold">Gaming Idea</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Describe your game vision in a few words and get a custom concept instantly.
          </p>
        </div>
        
        <GameIdeaForm />
      </div>
    </div>
  );
};

export default Index;
