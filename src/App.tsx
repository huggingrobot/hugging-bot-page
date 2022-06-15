import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Pricing from './pages/Pricing/Pricing';
import Team from './pages/Team/Team';
import Welcome from './pages/Welcome';

const routesMap = [
  { path: '/', element: <Welcome /> },
  { path: '/team', element: <Team /> },
  { path: '/pricing', element: <Pricing /> },

];

function App() {
  return (
    <Router >
      <Layout>
        <Routes>
          {routesMap.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {/* <Route path="*" element="/welcome" /> */}

        </Routes>
      </Layout>
    </Router >
  );
}

export default App;