import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { NewArrivals } from "../../components/NewArrivals/NewArrivals";
import { HandpickedCollections } from "../../components/HandpickedCollections/HandpickedCollections";
import { ShopByBrand } from "../../components/ShopByBrand/ShopByBrand";
import { SpotLightBanner } from "../../components/SpotLightBanner/SpotLightBanner";

export const HomePage = () => {

  return (
    <>
      <Hero />
      <NewArrivals />
      <HandpickedCollections />
      <ShopByBrand />
      <SpotLightBanner />
    </>
  );
};
