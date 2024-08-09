import { useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import { MainPage } from "./MainPage";

import { ROUTES } from "@/routes";
import { GalleryPage } from "@/screens";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

const browserRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: ROUTES.gallery, element: <GalleryPage /> },
      { path: ROUTES.dashboard, element: <MainPage /> },
      { path: ROUTES.default, element: <MainPage /> },
    ],
  },
];

export const AppRoutes = () => (
  <RouterProvider router={createBrowserRouter([...browserRoutes])} />
);
