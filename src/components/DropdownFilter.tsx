import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface DropdownFilterProps {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onValueChange: (value: string) => void;
}

export const DropdownFilter: React.FC<DropdownFilterProps> = ({
  label,
  options,
  value,
  onValueChange,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#1E1E1E] text-white border-none hover:bg-[#1E1E1E] hover:text-white min-w-[180px] justify-between rounded-lg "
        >
          {label}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full min-w-[180px] max-h-[300px] overflow-auto bg-[#1E1E1E] text-white border-none">
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              className="text-white cursor-pointer"
            >
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownFilter;
