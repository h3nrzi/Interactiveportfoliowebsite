import { currentUser } from '@clerk/nextjs/server';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default async function HomePage() {
  const user = await currentUser();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero isAuthenticated={!!user} userName={user?.firstName || undefined} />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
