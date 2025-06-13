const { createRoot } = require("react-dom/client");
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./src/App";

import Upcoming from "./src/components/Upcoming";
import TopRated from "./src/components/TopRated";
import MovieDetails from "./src/components/MovieDetails";
import MovieList from "./src/components/MovieList/MovieList";

console.log(MovieDetails);

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
        element: <MovieList />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "movie/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
