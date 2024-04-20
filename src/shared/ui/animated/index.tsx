import React, { ReactNode, useEffect, useRef, useState } from "react";

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
  // Show initially even if animatedShow is false
  showInitially?: boolean;
  className?: string;
  children?: ReactNode;
}

const AnimatedElement = React.memo(
  ({
    onEnter,
    onExit,
    animatedShow = true,
    showInitially = false,
    className = "",
    children,
  }: Props) => {
    const el = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(animatedShow || showInitially);
    const killEnterAnimation = useRef<(() => void) | null>(null);
    const killExitAnimation = useRef<(() => void) | null>(null);

    useEffect(() => {
      const handleAnimatedShowChange = () => {
        if (animatedShow) {
          killExitAnimation.current && killExitAnimation.current();

          setShow(true);

          if (!onEnter) {
            return;
          }

          killEnterAnimation.current = onEnter(el.current!);
        } else {
          killEnterAnimation.current && killEnterAnimation.current();

          if (!onExit) {
            setShow(false);
            return;
          }

          killExitAnimation.current = onExit(el.current!, () => {
            setShow(false);
          });
        }
      };

      handleAnimatedShowChange();
    }, [animatedShow, onEnter, onExit]);

    return (
      <div className={className} ref={el}>
        {show && children}
      </div>
    );
  }
);

export default AnimatedElement;
