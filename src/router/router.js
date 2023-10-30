import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { HomePage } from "../pages/homePage/HomePage";
import { RootLayout } from "../layouts/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route exact path="/category/:category" element={<categoryPage />}></Route>
    </Route>
  )
);
