import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClientLogin from "./pages/client/ClientLogin";
import AdminLogin from "./pages/admin/AdminLogin";
import Layout from "./components/Layout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Clients from "./pages/admin/Clients";
import Farms from "./pages/admin/Farms";
import ClientDashboard from "./pages/client/ClientDashboard";
import Irrigation from "./pages/client/Irrigation";
import Statistics from "./pages/client/Statistics";
import History from "./pages/client/History";
import FarmInformation from "./pages/client/FarmInformation";
import ClientInformation from "./pages/client/ClientInformation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Layout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="farms" element={<Farms />} />
        </Route>
        <Route path="client" element={<Layout />}>
          <Route index element={<ClientDashboard />} />
          <Route path="irrigation" element={<Irrigation />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="history" element={<History />} />
          <Route path="farm-information" element={<FarmInformation />} />
          <Route path="client-information" element={<ClientInformation />} />
        </Route>
        <Route path="client/login" element={<ClientLogin />} />
        <Route path="admin/login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
