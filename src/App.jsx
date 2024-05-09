import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import ShopItem from "./pages/ShopItem";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <Home />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: "/shop",
            element: <Shop />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: "/about",
            element: <About />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: "/men",
            element: <Men />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: "/women",
            element: <Women />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: "/kids",
            element: <Kids />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: `/item/:itemname`,
            element: <ShopItem />,
            errorElement: <div>Error 404 Not Found</div>,
          },
          {
            path: `/contact`,
            element: <Contact />,
            errorElement: <div>Error 404 Not Found</div>,
          },
        ])}
      />
    </>
  );
}

export default App;
