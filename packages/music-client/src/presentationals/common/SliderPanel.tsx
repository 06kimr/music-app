import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface Props {
  open: boolean;
}

export default function SliderPanel({
  children,
  open,
}: PropsWithChildren<Props>) {

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={open ? "open" : "closed"}
      variants={{
        open: { x: 0 },
        closed: { x: "100%" },
      }}
      className="absolute inset-y-0 right-0 h-full border-l-2 bg-gray900 border-gray800"
    >
      {children}
    </motion.div>
  );
}
