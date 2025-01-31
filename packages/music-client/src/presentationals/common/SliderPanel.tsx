import useOutsideClick from "@/hooks/common/useOutsideClick";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SliderPanel({
  children,
  open,
  onClose,
}: PropsWithChildren<Props>) {
  const conatinerRef = useOutsideClick<HTMLDivElement>(onClose);
  if (!open) return null;

  return (
    <motion.div
      ref={conatinerRef}
      initial={{x: "100%"}}
      animate={open ? "open": "closed"}
      variants={{
        open: {x: 0},
        closed: {x: "100%"}
      }}
      className="absolute inset-y-0 right-0 h-full border-l-2 bg-gray900 border-gray800"
    >
      {children}
    </motion.div>
  );
}
