import React from 'react';
import './App.css';
import './components/layout/Layout.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import AppRoutes from './routes/AppRoutes';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { FeatureFlagsProvider } from './context/FeatureFlagsContext';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const handleSearch = () => {
    // placeholder; could push query param into URL
  };

  return (
    <FeatureFlagsProvider>
      <div className="layout">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <Sidebar onSearch={handleSearch} />
        <MainContent>
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </MainContent>
      </div>
    </FeatureFlagsProvider>
  );
}

export default App;
