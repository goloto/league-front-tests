import React from "react";
import { matrix } from "../testCases/matrix";

export const App = () => {
  return (
    <>
      {matrix.map((row) => (
        <div style={{ display: "inline-block" }}>
          {row.map((col) => {
            // background

            return (
              <div
                style={{
                  height: "10px",
                  width: "10px",
                  backgroundColor: Boolean(col) ? "red" : "blue"
                }}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};
