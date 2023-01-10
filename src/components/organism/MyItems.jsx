import React from "react";
import HideScrollX from "../molecules/HideScrollX";
import MyItem from "../molecules/MyItem";

export default function MyItems({ metadata }) {
  return (
    <HideScrollX>
      {metadata.length === 1 ? (
        <MyItem item={metadata[0].metadata} />
      ) : (
        metadata.map((item) => <MyItem item={item.metadata} />)
      )}
    </HideScrollX>
  );
}
