import { FloatingNavbar } from '@/components/ui/FloatingNavbar';
import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import { FaHome } from 'react-icons/fa';

function HomePage() {
  return (
    <main className="relative flex flex-col justify-center items-center mx-auto px-5 sm:px-10 bg-black-100 overflow-hidden">
      <div className="w-full max-w-7xl">
        <FloatingNavbar
          navItems={[{ name: 'Home', link: '/', icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

export default HomePage;
