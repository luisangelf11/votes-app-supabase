import { VictoryChart, VictoryBar } from "victory";
import { supabase } from "../supabase/client";
import { useEffect, useState } from "react";
import { candidates } from "../data/candidates";
import CardCandidate from "./CardCandidate";
import Loader from "./Loader";

type Vote = {
  label: number;
  x: string;
  y: number;
};

export default function Analytics() {
  const [votes, setVotes] = useState<Array<Vote>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isLoadingState = () => {
    fetchData();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  };

  const fetchData = async () => {
    try {
      const fetchedVotes: Vote[] = [];

      for (let i = 1; i <= 10; i++) {
        const columns = ["first", "second", "third", "fourth"];
        const orConditions = columns
          .map((column) => `${column}.eq.${i}`)
          .join(",");
        const { data } = await supabase
          .from("votes")
          .select("*")
          .or(orConditions);
        const vote: Vote = {
          label: data?.length || 0,
          x: candidates[i - 1].name,
          y: data?.length || 0,
        };
        fetchedVotes.push(vote);
      }

      setVotes(fetchedVotes);
      //setIsLoading(false);
    } catch (error) {
      console.error("Error fetching votes:", error);
      //setIsLoading(false);
    }
  };
  useEffect(() => {
    isLoadingState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex-col flex justify-center items-center gap-3 mt-2">
          <div className="flex justify-center items-center gap-4 flex-wrap w-[80%]">
            {votes.map((el, index) => (
              <CardCandidate title={el.x} votes={el.y} key={index} />
            ))}
          </div>
          <div className="w-full h-[300px]">
            <VictoryChart domainPadding={{ x: 10, y: 20 }}>
              <VictoryBar
                horizontal
                style={{ data: { fill: "#2563EB" } }}
                data={votes}
              />
            </VictoryChart>
          </div>
        </div>
      )}
    </>
  );
}
