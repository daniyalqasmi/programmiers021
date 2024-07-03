import React, { useRef, useContext } from "react";
import { ScrollContext } from "../utils/scroll-observer";

interface WrapperProps {
  numOfPages: number;
  children: React.ReactNode;
}
interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numOfPages,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  let currentPage = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    currentPage = percentY * numOfPages;
    //   progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }
  // progress

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative "
        style={{
          height: numOfPages * 100 + "vh",
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};
type Child = {
  children: React.ReactNode;
};

export const TileBackground: React.FC<Child> = ({ children }) => (
  <div className="absolute h-full w-full ">{children}</div>
);

export const TileContent: React.FC<Child> = ({ children }) => (
  <div className="sticky top-0 ">{children}</div>
);

interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
}

export const Tile: React.FC<Props> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext);
  const progress = Math.max(0, currentPage - page);
  const refContainer = useRef<HTMLDivElement>(null);

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.65 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 2);
  }

  return (
    <div
      ref={refContainer}
      className=" absolute top-0 w-full  "
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};