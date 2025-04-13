"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "filepond/dist/filepond.min.css";
import { createTheme, ThemeProvider } from "@mui/material";

import "./output.css";
import Header from "@/app/components/layout/Header/Header";
import Footer from "@/app/components/layout/Footer/Footer";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const metadata = {
//   title: "Wander Way",
//   description: "Hiking App",
// };

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function RootLayout({ children }) {
  const [showTemplate, setShowTemplate] = useState(true);

  useEffect(() => {
    if (window && window.location.pathname.includes("admin"))
      setShowTemplate(false);
  }, []);

  if (!showTemplate) {
    return (
      <ThemeProvider theme={darkTheme}>
        <html lang="en">
          <body className={poppins.className}>{children}</body>
        </html>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
