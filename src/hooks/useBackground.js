import { useMemo } from "react";
import useMousePosition from "./useMousePosition";

export default function useBackground() {
  const position = useMousePosition();

  const background = useMemo(
    () => (position.x < window.innerWidth / 2 ? "green" : "orange"),
    [position]
  );
  return {background,position};
}
