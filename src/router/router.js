import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { RootLayout } from "../layouts/RootLayout";
import { Listing } from "../pages/Listing/Listing";
import { NotFound } from "../pages/NotFound/NotFound";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { MyCartPage } from "../pages/MyCartPage/MyCartPage";
import { CheckOutPage } from "../pages/CheckOutPage/CheckOutPage";
import { LogInPage } from "../pages/LogInPage/LogInPage";
import  AuthGuard ,  {LoginGuard } from "../pages/AuthGuard/AuthGuard";
import { PersonalInfoPage } from '../pages/PersonalInfoPage/PersonalInfoPage';
import { OrdersPage } from '../pages/OrdersPage/OrdersPage';
import { WishlistPage } from '../pages/WishlistPage/WishlistPage';
import { OrderDetailsPage } from '../pages/OrderDetailsPage/OrderDetailsPage';
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route
          path="/listing"
          element={
            <Listing />
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <AuthGuard>
              <ProductPage />
            </AuthGuard>
          }
        ></Route>
        <Route
          path="/cartpage"
          element={
            <AuthGuard>
              <MyCartPage />
            </AuthGuard>
          }
        ></Route>
        <Route
          exact
          path="/profile"
          element={
            <AuthGuard>
              <PersonalInfoPage />
            </AuthGuard>
          }
        ></Route>
        <Route
          path="/profile/my-orders"
          element={
            <AuthGuard>
              <OrdersPage />
            </AuthGuard>
          }
        ></Route>
        <Route
          path="/profile/my-wishlist"
          element={
            <AuthGuard>
              <WishlistPage />
            </AuthGuard>
          }
        ></Route>
        <Route
          path="/profile/my-orders/:orderID"
          element={
            <AuthGuard>
              <OrderDetailsPage />
            </AuthGuard>
          }
        ></Route>
      <Route
        path="/checkoutpage"
        element={
          <AuthGuard>
            <CheckOutPage />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="*"
        element={
          <NotFound />
        }
      ></Route>
      </Route>
      <Route path="/login" element={<LoginGuard><LogInPage /></LoginGuard>}></Route>
    </>
  )
)