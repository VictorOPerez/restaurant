import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./porfolio/pages/Home";
import HomeR from "./restaurante/pages/HomeR";
import Navbar from "./porfolio/components/Navbar";
import Footer from "./porfolio/components/Footer";
import Pagos from "./porfolio/pages/Pagos";
import NavbarR from "./restaurante/components/NavbarR";
import FooterR from "./restaurante/components/FooterR";
import Cart from "./restaurante/pages/Cart";

const Loyaut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const LoyautR = () => {
  return (
    <div>
      <NavbarR />
      {/* <div
        style={{
          position: "sticky",
          top: "100px",
          left: "100px",
          backgroundColor: "white",
          width: "max-content",
          zIndex: "100",
          padding: "15px 20px",
          borderRadius: "25px",
          fontSize: "18px",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontFamily: "Noto Serif",
          }}
          to="/"
        >
          Back to DigitalView
        </Link>
      </div> */}
      <Outlet />
      <FooterR />
    </div>
  );
};

const root = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Loyaut />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/pagos",
  //       element: <Pagos />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <LoyautR />,
    children: [
      {
        path: "/",
        element: <HomeR />,
      },
      // {
      //   path: "/restaurante/cart",
      //   element: <Cart />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={root} />;
}
export default App;
