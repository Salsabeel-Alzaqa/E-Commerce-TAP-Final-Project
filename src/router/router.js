import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { HomePage } from "../pages/HomePage/HomePage";
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";
import { RootLayout } from "../layouts/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/category/:category" element={<CategoryPage />}></Route>
      {/* <Route path="search/:brand" element={< />}></Route> */}
    </Route>
  )
);
