import React from "react";
import { Hero } from "../../components/Hero/Hero";
// import { InfoBanner } from "../../components/InfoBanner/InfoBanner";
import { NewArrivals } from "../../components/NewArrivals/NewArrivals";
// import { HandpickedCollections } from "../../components/HandpickedCollections/HandpickedCollections";
// import { SpotLightBanner } from "../../components/SpotLightBanner/SpotLightBanner";
import { ShopByBrand } from "../../components/ShopByBrand/ShopByBrand";

export const HomePage = () => {
  return (
    <>
      {/* <InfoBanner /> */}
      <Hero />
      <NewArrivals />
      {/* <HandpickedCollections /> */}
      <ShopByBrand />
      {/* <SpotLightBanner /> */}
    </>
  );
};