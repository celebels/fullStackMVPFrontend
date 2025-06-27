import React from "react";
import MainNav from "../components/MainNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <section className="w-screen flex flex-col min-h-screen">
      <MainNav />
      <main >
        <Outlet />
      </main>

      <Footer />
    </section>
  );
}
