import Book from "./components/Book";
import Cases from "./components/Cases";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Methology from "./components/Methology";
import Star from "./components/Star";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Features/>
      <Cases/>
      <Methology/>
      <Star/>
      <Book/>
    </main>
  );
}
