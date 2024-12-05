import { useTheme } from "./hooks/useTheme";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ParticleBackground from "./components/animations/ParticleBackground";
import MouseFollower from "./components/animations/MouseFollower";
import ScrollToTop from "./components/ui/ScrollToTop";
import WhatsAppChat from './components/WhatsAppChat';
import "./styles/index.css";
import './styles/WhatsAppChat.css';

function App() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <ParticleBackground />
      <MouseFollower />
      <ScrollToTop />
      <Header />

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-6 text-center text-gray-600 dark:text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Bismark Kadogbe. All rights
          reserved.
        </p>
      </footer>
      <WhatsAppChat />
    </div>
  );
}

export default App;
