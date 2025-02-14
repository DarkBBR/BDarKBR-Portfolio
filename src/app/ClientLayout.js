"use client";
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {children}
      <Skills />
      <About />
      <Project />
      <Contact />
    </>
  );
}
