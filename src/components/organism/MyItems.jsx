import React from "react";
import HideScrollX from "../molecules/HideScrollX";
import MyItem from "../molecules/MyItem";

export default function MyItems({ data }) {
  return (
    <HideScrollX>
      {data.result.map((index) => (
        <MyItem
          data={data}
          metadata={index.metadata}
          key={index.metadata.name}
        />
      ))}
    </HideScrollX>
  );
}
