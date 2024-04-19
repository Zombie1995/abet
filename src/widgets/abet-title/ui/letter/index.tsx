import gsap from "gsap";
import { CustomEase } from "gsap/all";
import React from "react";
import AnimatedElement from "shared/ui/animated/animated";

interface Props {
  letter: string;
  delay: number;
  active: boolean;
}

export const Letter = React.memo(({ letter, delay, active }: Props) => {
  return (
    <AnimatedElement
      onEnter={(el: HTMLElement) => {
        const anim = gsap.to(el, {
          duration: 0.5,
          motionPath: {
            path: [
              { x: 0, y: 0 },
              { x: 10, y: -10 },
              { x: 20, y: 0 },
            ],
          },
          yoyo: true,
          ease: CustomEase.create(
            "rotatedCircInOut",
            "M0,0 C0.122,0.036 0.239,0.182 0.5,0.5 C0.761,0.818 0.878,0.964 1,1"
          ),
          repeat: -1,
          delay: delay,
        });

        return () => {
          anim.kill();
        };
      }}
      onExit={(el: HTMLElement) => {
        const anim = gsap.to(el, { x: 0, y: 0 });
        return () => {
          anim.kill();
        };
      }}
      animatedShow={active}
      showInitially={true}
    >
      <p className="text-[500px] font-medium tracking-wider">{letter}</p>
    </AnimatedElement>
  );
});
