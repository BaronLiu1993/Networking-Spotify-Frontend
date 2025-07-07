import Features from "./components/home/features";
import Footer from "./components/home/footer";
import Landing from "./components/home/landing";
import Navbar from "./components/home/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Footer />
    </>
  );
}
