import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import IconDetails from '@/pages/IconDetails';
import CategoryPage from '@/pages/CategoryPage';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="lucide-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/icon/:iconName" element={<IconDetails />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
