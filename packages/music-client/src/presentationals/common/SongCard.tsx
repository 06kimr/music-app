import { tw } from "@/twMerge";
import { createContext, PropsWithChildren, useContext } from "react";
import { motion } from "framer-motion";
import PlayButton from "../player/PlayButton";

type Variant = "horizontal" | "vertical";

const SongCardContext = createContext<{ variant: Variant }>({
  variant: "vertical",
});

function SongCard({
  variant = "vertical",
  children,
  className,
}: Cn<PropsWithChildren<{ variant?: Variant }>>) {
  const variantClass =
    variant === "vertical"
      ? "flex-col gap-y-16"
      : "flex-row gap-x-14 items-center";
  return (
    <SongCardContext.Provider value={{ variant }}>
      <motion.div
        className={tw("flex relative p-9 rounded-6", variantClass, className)}
        whileTap="tap"
        whileHover="hover"
        initial="rest"
        variants={variant === "vertical" ? {
          tap: { scale: 0.95 },
          rest: {background: "transparent"},
          hover: {background: "rgba(255, 255, 255, 0.1)"}
        }: {}}
      >
        {children}
        <motion.span variants={{hover: {y:-10, opacity: 1}, rest: {opacity: 0, y: 0}}}
        className="absolute right-19 top-135">
          <PlayButton status={"paused"} onToggle={() => {}} />
        </motion.span>
      </motion.div>
    </SongCardContext.Provider>
  );
}

function SongCardImage({
  src,
  alt,
  className,
}: Cn<{ src: string; alt: string }>) {
  const { variant } = useContext(SongCardContext);
  const variantClass =
    variant === "vertical" ? "rounded-6 size-150" : "rounded-4 size-56";
  return (
    <img
      src={src}
      alt={alt}
      className={tw(variantClass, "object-cover", className)}
    />
  );
}

function SongCardTitle({ children, className }: Cn<PropsWithChildren>) {
  const { variant } = useContext(SongCardContext);
  const variantClass =
    variant === "vertical" ? "text-white text-16 size" : "text-gray200";
  return <h5 className={tw(variantClass, "text-16", className)}>{children}</h5>;
}

function SongCardDescription({ children, className }: Cn<PropsWithChildren>) {
  const { variant } = useContext(SongCardContext);
  const variantClass =
    variant === "vertical" ? "text-gray300 font-light" : "text-gray500";
  return <p className={tw(variantClass, "text-14", className)}>{children}</p>;
}

function SongCardContent({ children, className }: Cn<PropsWithChildren>) {
  const { variant } = useContext(SongCardContext);
  const variantClass = variant === "vertical" ? "gap-y-11" : "gap-y-7";
  return (
    <div className={tw(variantClass, "flex flex-col", className)}>
      {children}
    </div>
  );
}

SongCard.Image = SongCardImage;
SongCard.Title = SongCardTitle;
SongCard.Description = SongCardDescription;
SongCard.Content = SongCardContent;

export default SongCard;
