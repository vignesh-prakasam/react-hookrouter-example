import Navbar from "./navbar";
import { useRoutes } from "hookrouter";
import Home from "./Home";
import Products from "./Products";
import Users from "./Users";

const routes = {
  "/": () => <Home />,
  "/home": () => <Home />,
  "/users": () => <Users />,
  "/products": () => <Products />
};

function App() {
  const routeResult = useRoutes(routes);

  return (
    <Navbar>
      {routeResult || <h1>404 Not Found</h1>}
    </Navbar>
  );
}

export default App;
