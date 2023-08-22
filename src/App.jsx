import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import PageNotFound from "./pages/PageNotFound";
import { Suspense } from "react";

import AppLayout from "./pages/applayout/AppLayout";
import CityList from "./components/city/CityList";
import CountryList from "./components/country/CountryList";
import Form from "./components/form/Form";
import City from "./components/city/City";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SpinnerFullPage from "./components/spinner/SpinnerFullPage";
import Login from "./pages/login/Login";
import ProtectedRoutes from "./auth/ProtectedRoutes";
const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClinet}>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="app"
              element={
                <ProtectedRoutes>
                  <AppLayout />
                </ProtectedRoutes>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
