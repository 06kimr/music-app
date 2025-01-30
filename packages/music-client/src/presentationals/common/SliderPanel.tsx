import useOutsideClick from "@/hooks/common/useOutsideClick";
import { PropsWithChildren } from "react";

interface Props {
  open: boolean;
  onClose: () => void
}

export default function SliderPanel({
  children,
  open,
  onClose
}: PropsWithChildren<Props>) {
  const conatinerRef = useOutsideClick<HTMLDivElement>(onClose);
  if (!open) return null;

  return <div ref={conatinerRef} className="absolute inset-y-0 right-0 h-full border-l-2 bg-gray900 border-gray800">{children}</div>;
}
