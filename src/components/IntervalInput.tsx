import { useAtom } from "jotai";
import { intervalAtom } from "@/atoms/fieldAtoms";
import { ClockIcon } from "lucide-react";

interface IntervalInputProps {}
export const IntervalInput = ({}: IntervalInputProps) => {
  const [interval, setInterval] = useAtom(intervalAtom);

  return (
    <div className="relative group">
      {/* Price Indicator */}
      <div className="absolute top-4 right-4 z-10 bg-muted/80 border border-border/50 rounded-full py-2 px-3 flex items-center gap-2 backdrop-blur-sm">
        <ClockIcon className="w-4 h-4 text-primary" />
      </div>

      {/* Input Container */}
      <div className="bg-input/50 hover:bg-input/70 dark:bg-input/30 dark:hover:bg-input/50 border border-border/30 dark:border-border/40 rounded-2xl transition-all duration-200 group-hover:border-border/60 dark:group-hover:border-border/70 backdrop-blur-sm">
        <input
          value={interval}
          onInput={(e) => {
            const value = Number(e.currentTarget.value);
            if (isNaN(value) || value === 0) {
              setInterval("");
              return;
            }

            setInterval(value.toString());
          }}
          className="w-full bg-transparent text-2xl sm:text-3xl font-bold pt-14 pb-4 pr-16 pl-4 sm:pl-6 outline-none placeholder:text-muted-foreground/50 text-foreground"
          placeholder="0.00"
        />

        {/* Label */}
        <div className="absolute top-4 left-4 sm:left-6 text-sm font-medium text-muted-foreground">
          Interval
        </div>

        <div className="absolute bottom-6 right-4 sm:right-6 text-sm font-medium text-muted-foreground">
          mins
        </div>
      </div>
    </div>
  );
};
