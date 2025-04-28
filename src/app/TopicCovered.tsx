import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

type TopicCoveredProps = {
  topics: string[];
};

const TopicCovered = ({ topics }: TopicCoveredProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-fit">
      <div className="flex items-center justify-between my-2 mr-2">
        <h1 className="text-lg font-semibold">Topics Covered</h1>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon">
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <ul className="ml-4 list-disc space-y-1">
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default TopicCovered;
