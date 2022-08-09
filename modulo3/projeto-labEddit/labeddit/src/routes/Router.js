import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import CommentPage from "../pages/CommentPage/CommentPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SingUpPage from "../pages/SingUpPage/SingUpPage";

const Router = () => {
  return (
    <BrowserRouter>
     <Header />
        <Routes>
            <Route  index exact path="/" element={<FeedPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="singup" element={<SingUpPage />} />
            <Route path="comment/:id" element={<CommentPage />} />
            <Route path="*" element={"Pagina não encontrada"} />
        </Routes>
    </BrowserRouter>

    )
}

export default Router
