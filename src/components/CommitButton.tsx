import { fieldsValidAtom } from "@/atoms/validationAtoms";
import { usePlaceOrder } from "@/hooks/usePlaceOrder";
import { useAtomValue } from "jotai";

export const CommitButton = (props: React.ComponentProps<"button">) => {
  const fieldsValid = useAtomValue(fieldsValidAtom);

  const { placeOrder, isPlacingOrder } = usePlaceOrder();
  
  const disabled = !fieldsValid || isPlacingOrder;

  return (
    <button
      className="w-full bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground rounded-xl py-3.5 px-4 font-medium text-primary-foreground cursor-pointer transition-colors duration-150 disabled:cursor-not-allowed text-base"
      disabled={disabled}
      onClick={placeOrder}
      {...props}
    >
      {isPlacingOrder ? "Placing Order..." : "Place Limit Order"}
    </button>
  );
};
