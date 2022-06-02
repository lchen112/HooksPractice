import { useEffect, useState } from "react";
export function useKeyPress() {
  const [keyPressed, setKeyPressed] = useState(false);

  function handleDown({ key }) {
    setKeyPressed(key);
  }

  function handleUp({ key }) {
    setKeyPressed(false);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);
    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, []);

  return keyPressed;
}
