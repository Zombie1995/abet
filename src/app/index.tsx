import gsap from "gsap";
import { CustomEase, MotionPathPlugin } from "gsap/all";
import { router } from "pages";
import { RouterProvider } from "react-router-dom";
import "./index.css";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(CustomEase);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
