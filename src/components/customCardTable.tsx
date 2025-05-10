"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatNumber } from "@/lib/utils";
import { TableIcon } from "lucide-react";

type GameConcept = {
  count: number;
  id: string;
  title: string;
  publisher: string;
  totalInstalls: number;
  last30DaysInstalls: number;
  rating: number;
  containsIAP: boolean;
  releaseDate: string;
  similarityIndex: number;
  url: string;
};

interface SimilarGameConceptsCardProps {
  data: GameConcept[];
}

const CustomCardTable = ({ data }: SimilarGameConceptsCardProps) => {
  return (
    <Card className="w-full mt-12 bg-[#1E1E1E]/50 border-0 rounded-xl text-white">
      <CardHeader className="pb-0">
        <div className="flex items-center mb-2 gap-2">
          <CardTitle className="text-2xl font-jakarta">Competitor</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-b font-semibold border-white/10">
              <TableHead className="text-white text-base font-bold">
                #
              </TableHead>
              <TableHead className="text-white text-base font-bold">
                Title
              </TableHead>
              <TableHead className="text-white text-base font-bold">
                Publisher
              </TableHead>
              <TableHead className="text-white text-base  font-bold">
                Total Installs
              </TableHead>
              <TableHead className="text-white text-base  font-bold">
                Last 30 Days Install
              </TableHead>
              <TableHead className="text-white text-base font-bold">
                Rating
              </TableHead>
              <TableHead className="text-white text-base  font-bold">
                Contain IAP
              </TableHead>
              <TableHead className="text-white text-base  font-bold">
                Similarity Index
              </TableHead>
              <TableHead className="text-white text-base  font-bold">
                Release Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-x-auto h-[400px]">
            {data.map((game) => (
              <TableRow
                key={game.id}
                className="border-b border-white/5 hover:bg-white/5"
              >
                <TableCell className="text-white/80">{game.count}</TableCell>
                <TableCell className="text-white/80">{game.title}</TableCell>
                <TableCell className="">
                  {game?.publisher}
                  {/* <span className="bg-gradient-to-r from-pink-400 to-purple-600 text-white rounded-full px-2 py-1 text-xs font-medium">
                    {game.publisher}
                  </span> */}
                </TableCell>
                <TableCell className="text-white/80">
                  {formatNumber(game.totalInstalls || 0)}
                </TableCell>
                <TableCell className="text-white/80">
                  {formatNumber(game.last30DaysInstalls || 0)}
                </TableCell>
                <TableCell className="text-white/80">
                  {(game.rating || 0).toFixed(1)}/5
                </TableCell>
                <TableCell className="text-white/80">
                  {game.containsIAP ? "Yes" : "NO"}
                </TableCell>
                <TableCell className="text-white/80">
                  {game.similarityIndex || "--"}
                </TableCell>
                <TableCell className="text-white/80">
                  {game.releaseDate || "--"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CustomCardTable;
