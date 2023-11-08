import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { HomePage } from "../pages/HomePage/HomePage";
import { RootLayout } from "../layouts/RootLayout";
import { Listing } from "../pages/Listing/Listing";
import { ProductPage } from "../pages/ProductPage/ProductPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/listing" element={<Listing />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
    </Route>
  )
);
