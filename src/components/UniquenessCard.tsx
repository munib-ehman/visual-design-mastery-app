import { Card, CardContent } from "./ui/card";

interface RatingProps {
  label: string;
  value: number; // Assuming value is a number now
}

const UniquenessCard = ({ label, value }: RatingProps) => {
  // Function to determine the level class based on the value
  const getLevelClassName = (range: string, currentValue: number) => {
    const isActive =
      (range === "Very High" && currentValue >= 75) ||
      (range === "High" && currentValue >= 70 && currentValue < 75) ||
      (range === "Moderate" && currentValue >= 60 && currentValue < 70) ||
      (range === "Low" && currentValue < 60);

    return `px-3 py-1 rounded-xl text-sm font-medium font-poppins ${
      isActive
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

export default UniquenessCard;
