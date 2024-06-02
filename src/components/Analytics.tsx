import { VictoryChart, VictoryBar } from "victory";
import { supabase } from "../supabase/client";
import { useEffect, useState } from "react";
import { candidates } from "../data/candidates";

type Vote = {
    label: number;
    x: string;
    y: number;
  };

export default function Analytics() {
    const [votes, setVotes] = useState<Array<Vote>>([]);

    const fetchData = async () => {
        try {
          const fetchedVotes: Vote[] = [];
  
          for (let i = 1; i <= 10; i++) {
            const columns = ['first', 'second', 'third', 'fourth'];
            const orConditions = columns.map(column => `${column}.eq.${i}`).join(',');
            const { data } = await supabase.from('votes').select('*').or(orConditions);
            const vote: Vote = {
              label: data?.length ?? 0,
              x: candidates[i - 1].name,
              y: data?.length ?? 0
            };
            fetchedVotes.push(vote);
          }
  
          setVotes(fetchedVotes);
          //setIsLoading(false);
        } catch (error) {
          console.error('Error fetching votes:', error);
          //setIsLoading(false);
        }
      };
    useEffect(()=>{
      
          fetchData();
          
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className="w-full h-[300px]">
      <VictoryChart domainPadding={{x: 10, y: 20}}>
        <VictoryBar
        horizontal
          style={{ data: { fill: "#2563EB" } }}
          data={votes}
        />
      </VictoryChart>
    </div>
  );
}
