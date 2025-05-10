import CustomCardTable from "@/components/customCardTable";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import { ChartNoAxesColumn } from "lucide-react";
import React from "react";
import { useLocation } from "react-router-dom";

type RatingLevel = "Low" | "Moderate" | "High";

type RatingProps = {
  label: string;
  value: RatingLevel;
};

type StatsCardProps = {
  label: string;
  value: string;
};

const RatingCard = ({ label, value }: RatingProps) => {
  const getLevelClassName = (level: string, currentValue: string) => {
    return `px-3 py-1 rounded-xl text-sm font-medium font-poppins ${
      level === currentValue
        ? "bg-[url('/gradients/background-home.png')] bg-cover bg-no-repeat"
        : "bg-gray-800 text-gray-400"
    }`;
  };

  return (
    <Card className="bg-[#1E1E1E]/50 rounded-xl text-white border-0">
      <CardContent className="p-7">
        <h3 className="text-2xl font-poppins font-semibold tracking-wider mb-4">
          {label}
        </h3>
        <div className="flex gap-2">
          <span className={getLevelClassName("Low", value)}>Low</span>
          <span className={getLevelClassName("Moderate", value)}>Moderate</span>
          <span className={getLevelClassName("High", value)}>High</span>
          <span className={getLevelClassName("Very High", value)}>
            Very High
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const StatsCard = ({ label, value }: StatsCardProps) => {
  return (
    <Card className="bg-[#1E1E1E]/50 rounded-xl text-white border-0">
      <CardContent className="p-7 flex flex-row items-center justify-between">
        <h3 className="text-2xl font-poppins font-semibold tracking-wider">
          {label}
        </h3>
        <div className="flex items-center">
          <span className="bg-[url('/gradients/background-home.png')] bg-cover bg-no-repeat text-white rounded-xl px-3 py-1 flex items-center justify-center text-base font-semibold">
            {value}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const ScoreCard = ({ score }: { score: number }) => {
  return (
    <Card className="bg-[#1E1E1E]/50 rounded-xl text-white border-0 row-span-2 h-full">
      <CardContent className="p-7 h-full flex flex-row items-center ">
        <div className="flex-1">
          <h3 className="text-5xl font-poppins font-black mb-2 bg-clip-text bg-gradient-to-t from-[#788797] to-white text-transparent">
            Product Score
          </h3>
          <div>
            <span className="text-5xl font-poppins font-semibold">
              {score}
              <span className="text-base">/100</span>
            </span>
          </div>
        </div>
        <ChartNoAxesColumn className="flex-1" size={120} strokeWidth={3} />
      </CardContent>
    </Card>
  );
};

const Summary = ({ summary }: { summary: string }) => (
  <Card className="bg-[#1E1E1E]/50 rounded-xl text-white border-0">
    <CardContent className="p-7 h-full flex flex-col items-center ">
      <h3 className="text-2xl font-poppins font-black mb-2 bg-clip-text bg-gradient-to-t from-teal-200 to-white text-transparent">
        Insights
      </h3>{" "}
      <p className="text-center text-white/80  mx-auto">{summary}</p>
    </CardContent>
  </Card>
);

type GameAnalysisProps = {
  score: number;
  uniqueness: RatingLevel;
  competition: RatingLevel;
  totalProducts: string;
  installs: string;
};

const GameAnalysis = () => {
  const location = useLocation();
  const result = location.state?.result;
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[url(/gradients/background-home.png)] bg-no-repeat bg-cover p-4 md:p-8">
      <div className="w-full flex flex-col space-y-6 max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 h-full">
            <ScoreCard score={result?.ideaScore} />
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <RatingCard
              label="Uniqueness"
              value={result?.highestSimilarityIndex}
            />
            <RatingCard
              label="Competition"
              value={result?.marketInsights?.competitionLevel}
            />
            <StatsCard
              label="Total Products"
              value={formatNumber(result?.totalProductsCount)}
            />
            <StatsCard
              label="30 Days Installs"
              value={formatNumber(
                result?.marketInsights?.avgLast30DaysInstalls
              )}
            />
          </div>
        </div>
        <Summary summary={result.scoreExplanation} />
        <CustomCardTable data={result?.competitors} />
      </div>
    </div>
  );
};

export default GameAnalysis;
