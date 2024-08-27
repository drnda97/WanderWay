import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { createTheme, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wander Way",
  description: "Hiking App",
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({ children }) {
  return (
    // <MantineProvider theme={theme}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    // </MantineProvider>
  );
}
