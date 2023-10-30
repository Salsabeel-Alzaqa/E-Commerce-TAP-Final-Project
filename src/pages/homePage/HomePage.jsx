import React from "react";
import { Hero } from "../../components/hero/Hero";
import { InfoBanner } from "../../components/infoBanner/InfoBanner";
import { NewArrivals } from "../../components/newArrivals/NewArrivals";
import { HandpickedCollections } from "../../components/handpickedCollections/HandpickedCollections";
import { ShopByBrand } from "../../components/shopByBrand/ShopByBrand";
import { SpotLightBanner } from "../../components/spotLightBanner/SpotLightBanner";

export const HomePage = () => {
  return (
    <>
      <InfoBanner />
      <Hero />
      <NewArrivals />
      <HandpickedCollections />
      <ShopByBrand />
      <SpotLightBanner />
    </>
  );
};
