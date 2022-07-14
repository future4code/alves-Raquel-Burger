import React from 'react'
import AdminPage from "../pages/Admin/AdminPage";
import ApplicationFormPage from "../pages/ApplicationForm/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTrip/CreateTripPage";
import HomePage from "../pages/Home/HomePage";
import ListTripsPage from "../pages/ListTrips/ListTripsPage";
import LoginPage from "../pages/Login/LoginPage";
import TripDetailsPage from "../pages/TripDetails/TripDetailsPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="trips/list" element={<ListTripsPage />} />
      <Route path="trips/application" element={<ApplicationFormPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="admin/trips/list" element={<AdminPage />} />
      <Route path="admin/trips/:id" element={<TripDetailsPage />} />
      <Route path="admin/trips/create" element={<CreateTripPage />} />
      <Route path="*" element={"Página não encontrada"} />

    </Routes>
  </BrowserRouter>
  )
}

export default Router