import React, { useState } from "react";
import GameIdeaForm from "@/components/GameIdeaForm";
import LoadingScreen from "@/components/LoadingScreen";
const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url(/gradients/background-home.png)] bg-no-repeat bg-cover p-4 md:p-8">
      {isLoading && <LoadingScreen onDone={() => {}} />}
      <div className="w-full max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-2 md:space-y-4">
          <h1 className="font-poppins text-7xl text-white font-[100]">
            Your Next <span className="font-semibold">Gaming Idea</span>
          </h1>
          <p className="font-jakarta text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-thin tracking-tight ">
          Describe your game idea and unlock tailored insights to bring it to life
          </p>
        </div>

        <GameIdeaForm setIsLoading={setIsLoading} />
      </div>
    </div>
  );
};
export default Index;
