import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/error-page.tsx";
import About from "./pages/about.tsx";
import Home from "./pages/home.tsx";
import Gallery from "./pages/gallery.tsx";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";

Amplify.configure(outputs);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "gallery",
        element: <Gallery/>,
      },
    ],
  }
]);

// const theme = extendTheme({
//   styles: {
//     global: {
//       body: {
//         bg: "black",
//         color: "white",
//         minHeight: "100vh",
//         margin: "0",
//         padding: "0",
//       },
//       html: {
//         height: "100%",
//       },
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ChakraProvider theme={theme}> */}
      <RouterProvider router={router} />
    {/* </ChakraProvider> */}
  </React.StrictMode>
);
