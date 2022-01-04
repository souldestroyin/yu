import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useScroll } from "./useScroll";

export default function App() {
  const { onScroll, info } = useScroll();

  useEffect(() => {
    const uns = info.onScrollToBottom(() => {
      console.log("bottom");
    });

    return () => {
      uns();
    };
  }, []);

  return (
    <div
      onScroll={onScroll}
      style={{
        height: 600,
        width: 400,
        overflow: "scroll",
      }}
    >
      <div
        style={{
          height: 800,
          width: "100%",
          background: "red",
        }}
      ></div>

      <div
        style={{
          height: 800,
          width: "100%",
          background: "blue",
        }}
      ></div>

      <div
        style={{
          height: 800,
          width: "100%",
          background: "green",
        }}
      ></div>
    </div>
  );
}
