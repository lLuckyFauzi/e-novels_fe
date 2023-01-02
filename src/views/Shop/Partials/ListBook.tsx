import React from "react";
import Card from "../../../component/Card/Card";

const ListBook = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        justifyContent: "center",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
        return <Card />;
      })}
    </div>
  );
};

export default ListBook;
