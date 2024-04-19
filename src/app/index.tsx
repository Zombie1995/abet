import gsap from "gsap";
import { CustomEase, MotionPathPlugin } from "gsap/all";
import { router } from "pages";
import { RouterProvider } from "react-router-dom";
import { DefaultLayout } from "widgets/default-layout";
import "./index.css";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(CustomEase);

const App = () => {
  return (
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  );
};

export default App;
