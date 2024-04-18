import { ReactNode, useEffect, useRef, useState } from "react";

// Function returns animation killer function which invoked when component change its visibility
export type AnimationEnterCallback = (el: HTMLElement) => null | (() => void);
export type AnimationExitCallback = (
  el: HTMLElement,
  done: () => void
) => null | (() => void);

interface Props {
  // Animation on enter
  onEnter: AnimationEnterCallback;
  // Animation on exit
  onExit: AnimationExitCallback;
  // Use this visibility toggle if you want exit animation
  animatedShow?: boolean;
  // Use animation on element mount
  appear?: boolean;
  children?: ReactNode;
}

const AnimatedElement = ({
  onEnter,
  onExit,
  animatedShow = true,
  children,
}: Props) => {
  const el = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(animatedShow);
  const [killEnterAnimation, setKillEnterAnimation] = useState<
    (() => void) | null
  >(null);
  const [killExitAnimation, setKillExitAnimation] = useState<
    (() => void) | null
  >(null);

  useEffect(() => {
    const handleAnimatedShowChange = () => {
      if (animatedShow) {
        killExitAnimation && killExitAnimation();

        setShow(animatedShow);

        if (!onEnter) {
          return;
        }

        setKillEnterAnimation(onEnter(el.current!));
      } else {
        killEnterAnimation && killEnterAnimation();

        if (!onExit) {
          setShow(animatedShow);
          return;
        }

        setKillExitAnimation(
          onExit(el.current!, () => {
            setShow(animatedShow);
          })
        );
      }
    };

    handleAnimatedShowChange();
  }, [animatedShow, killEnterAnimation, killExitAnimation, onEnter, onExit]);

  return <div ref={el}>{show && children}</div>;
};

export default AnimatedElement;
