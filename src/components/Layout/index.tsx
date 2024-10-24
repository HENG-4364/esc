"use client";

import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Switcher from "../switcher";

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Switcher />
    </div>
  );
}
