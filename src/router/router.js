import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { HomePage } from "../pages/HomePage/HomePage";
import { RootLayout } from "../layouts/RootLayout";
import { Listing } from "../pages/Listing/Listing";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { MyCartPage } from "../pages/MyCartPage/MyCartPage";
import { CheckOutPage } from "../pages/CheckOutPage/CheckOutPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/listing" element={<Listing />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
      <Route path="/cartpage" element={<MyCartPage />}></Route>
      <Route path="/checkoutpage" element={<CheckOutPage />}></Route>
    </Route>
  )
);
