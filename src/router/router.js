import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { RootLayout } from "../layouts/RootLayout";
import { Listing } from "../pages/Listing/Listing";
import { NotFound } from "../pages/NotFound/NotFound";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { MyCartPage } from "../pages/MyCartPage/MyCartPage";
import { CheckOutPage } from "../pages/CheckOutPage/CheckOutPage";
import { LogInPage } from "../pages/LogInPage/LogInPage";
import { PersonalInfoPage } from '../pages/PersonalInfoPage/PersonalInfoPage';
import { OrdersPage } from '../pages/OrdersPage/OrdersPage';
import { WishlistPage } from '../pages/WishlistPage/WishlistPage';
import { OrderDetailsPage } from '../pages/OrderDetailsPage/OrderDetailsPage';
import { AuthGuard , authGuardLoader , loginPageLoader } from '../pages/AuthGuard/AuthGuard';
import { logOut } from "../utils/userutils";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {path: "/",element: <HomePage />},
      {path: "/listing",element: <Listing />},
      { path: "*", element: <NotFound /> },
      {
        element: <AuthGuard />,
        loader: authGuardLoader,
        onError: (error) => {
          if (error && error.status === 401) {
            logOut();
          }
        },
        children: [
          { path: "/product/:id", element: <ProductPage /> },
          { path: "/cartpage", element: <MyCartPage />},
          { path: "/profile", element: <PersonalInfoPage />},
          { path: "/profile/my-orders", element: <OrdersPage /> },
          { path: "/profile/my-wishlist", element: <WishlistPage />},
          { path: "/profile/my-orders/:orderID", element: <OrderDetailsPage /> },
          { path: "/checkoutpage", element: <CheckOutPage /> },
        ]
      },
    ],
  },
  {
    path: "/login",
    loader: loginPageLoader,
    element: <LogInPage />
  },
]);