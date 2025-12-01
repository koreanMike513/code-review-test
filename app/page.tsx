import Profile from '@/components/Profile';
import Gallery from '@/components/Gallery';
import SocialLinks from '@/components/SocialLinks';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Profile />
      <Gallery />
      <SocialLinks />
      <Timeline />

      <footer className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
        <p>&copy; 2024 건호류. All rights reserved.</p>
      </footer>
    </div>
  );
}
