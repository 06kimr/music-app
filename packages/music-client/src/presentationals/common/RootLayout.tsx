import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center w-full min-h-full bg-gray900">
      <main className="w-[654px]">{children}</main>
    </div>
  );
}
