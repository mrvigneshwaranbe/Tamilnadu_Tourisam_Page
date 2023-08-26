import React from "react";
import CarouselComponent from "./CarouselComponent";
import Chennai from "./Chennai";
import Rameshwaram from "./Rameshwaram";
import Kodaikanal from "./Kodaikanal";
import Ooty from "./Ooty";
import Kaniyakumari from "./Kanyakumari";
import Kumbakonam from "./Kumbakonam";
import Madurai from "./Madurai";
import Yercaud from "./Yarcaud";
import Theni from "./Theni";
import Hogenakkal from "./Hogenakkal";
function Home() {
  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <Chennai></Chennai>
      <Rameshwaram></Rameshwaram>
      <Kodaikanal></Kodaikanal>
      <Ooty></Ooty>
      <Kaniyakumari></Kaniyakumari>
      <Kumbakonam></Kumbakonam>
      <Madurai></Madurai>
      <Yercaud></Yercaud>
      <Theni></Theni>
      <Hogenakkal></Hogenakkal>
    </div>
  );
}

export default Home;
