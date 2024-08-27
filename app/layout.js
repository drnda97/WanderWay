"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Wander Way",
//   description: "Hiking App",
// };

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
