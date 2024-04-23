import { createBrowserRouter } from "react-router-dom";
import Main from "./main";
import NewsItem from "./news-item";

export const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/news/:id", element: <NewsItem /> },
]);
