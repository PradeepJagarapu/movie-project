const { createRoot } = require("react-dom/client");
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App";
import MovieList from "./src/components/MovieList";

const root = createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MovieList />,
      },
      {
        path: "popular",
        element: <h1>Popular Movies</h1>,
      },
      {
        path: "top-rated",
        element: <h1>Top Rated Movies</h1>,
      },
      {
        path: "upcoming",
        element: <h1>Upcoming Movies</h1>,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
