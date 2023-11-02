import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { NewArrivals } from "../../components/NewArrivals/NewArrivals";
import { HandpickedCollections } from "../../components/HandpickedCollections/HandpickedCollections";
import { SpotLightBanner } from "../../components/SpotLightBanner/SpotLightBanner";
import { ShopByBrand } from "../../components/ShopByBrand/ShopByBrand";

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