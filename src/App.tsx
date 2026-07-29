import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
