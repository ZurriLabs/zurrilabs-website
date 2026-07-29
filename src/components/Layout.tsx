import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'var(--ink)' }}>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
