
import DemoNavBar from "./components/DemoNavBar";
import { Routes, Route, Outlet } from "react-router-dom";
import { Main } from "./pages/Main";
import { Projects } from "./pages/Projects";
import { Api } from "./pages/Api";
import { Member } from "./pages/Member";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/api" element={<Api />} />
          <Route path="/member" element={<Member />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}


function Layout() {
  return (
    <div>
      <DemoNavBar />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}