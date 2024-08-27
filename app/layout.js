"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";
1;
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
    mode: "dark",
  },
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
