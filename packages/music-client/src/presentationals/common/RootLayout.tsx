import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex justify-center w-full min-h-full overflow-auto bg-gray900 pb-104">
      <main className="w-[654px]">{children}</main>
    </div>
  );
}
