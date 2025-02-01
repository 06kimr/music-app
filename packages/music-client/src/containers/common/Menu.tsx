import { tw } from "@/twMerge";
import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import ArrowIcon from "@/assets/icons/play_arrow.svg?react";

const MenuContext = createContext<{
  openSubmenuKey: string | null;
  onChangeOpenSubmenuKey: (openSubmenuKey: string | null) => void;
  onClose: () => void;
}>({ openSubmenuKey: null, onChangeOpenSubmenuKey: () => {}, onClose: () => {} });

function Menu({
  children,
  className,
  onClose,
}: Cn<PropsWithChildren<{ onClose: () => void }>>) {
  const [openSubmenuKey, setOpenSubmenuKey] = useState<string | null>(null);

  const handleClose = () => {
    setOpenSubmenuKey(null);
    onClose();
  };
  return (
    <MenuContext.Provider
      value={{
        openSubmenuKey,
        onChangeOpenSubmenuKey: setOpenSubmenuKey,
        onClose: handleClose,
      }}
    >
      <div
        className={tw(
          "absolute left-0 right-0 bg-gray600 border-2 border-[#D9d9d9d9]",
          className
        )}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function MenuItem({
  label,
  value,
  onSelect,
  children,
}: PropsWithChildren<{
  label: ReactNode;
  value: string;
  onSelect?: (value: string) => void;
}>) {
  const { openSubmenuKey, onChangeOpenSubmenuKey, onClose } =
    useContext(MenuContext);
  const handleClick = () => {
    onSelect?.(value);
    if (children) {
      onChangeOpenSubmenuKey(openSubmenuKey === value ? null : value);
    } else {
      onClose();
    }
  };
  return (
    <div className="relative w-[255px]">
      <button className="p-8 " onClick={handleClick}>
        {label}
        {!!children && <ArrowIcon className="absolute top-8 right-7" />}
      </button>
      {!!children && openSubmenuKey === value && children}
    </div>
  );
}

function SubMenu({ children }: PropsWithChildren) {
  return (
    <div className="relative w-full h-0">
      <div className="absolute right-full -top-13 bg-gray600 border-2 border-[#D9d9d9d9]">
        {children}
      </div>
    </div>
  );
}

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu;
