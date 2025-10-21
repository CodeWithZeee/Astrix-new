import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { LoadingProvider } from "./components/LoadingContext";
import RevealAnimation from "./components/RevealAnimation";
import LoadingPage from "./components/LoadingPage";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Astrix Digital Media",
  description: "Thrive on your success with Astrix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.className} ${comfortaa.variable} antialiased`}
      >
        {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover overflow-auto "
        src= "hero_vid.mp4"
        autoPlay
        loop
        muted
      /> */}
        <LoadingPage />
        <Toaster
          toastOptions={{
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <Navbar />
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
