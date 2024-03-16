import React, { useState } from "react";
import { whoIsVolonteer } from "../JSON/WhoISVolonteer";

export default function AboutVolonteer() {
  const [items, setItems] = useState(whoIsVolonteer);
  return (
    <>
      {items.map((item, index) => (
        <article className="WrapTextVolonteer" key={index}>
          <h2 className="WrapTextVolonteer__title">{item.title}</h2>
          <p className="WrapTextVolonteer__text"> {item.textOne}</p>
          <p className="WrapTextVolonteer__text"> {item.textTwo}</p>
          <p className="WrapTextVolonteer__text"> {item.textThree}</p>
        </article>
      ))}
    </>
  );
}
