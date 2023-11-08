import React, { useEffect, useRef } from "react";
import { Hero } from "../../components/Hero/Hero";
import { NewArrivals } from "../../components/NewArrivals/NewArrivals";
import { HandpickedCollections } from "../../components/HandpickedCollections/HandpickedCollections";
import { SpotLightBanner } from "../../components/SpotLightBanner/SpotLightBanner";
import { ShopByBrand } from "../../components/ShopByBrand/ShopByBrand";
import { useOutletContext } from "react-router-dom";

export const HomePage = () => {
  const { section } = useOutletContext();

  const featuredSection = useRef(null);
  const trendySeciton = useRef(null);
  const brandsSection = useRef(null);

  useEffect(() => {
    switch (section) {
      case "Featured":
        featuredSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Trendy":
        trendySeciton.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Brands":
        brandsSection.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [section]);

  return (
    <>
      <Hero />
      <NewArrivals />
      <HandpickedCollections innerRef={featuredSection} />
      <ShopByBrand innerRef={brandsSection} />
      <SpotLightBanner innerRef={trendySeciton} />
    </>
  );
};
