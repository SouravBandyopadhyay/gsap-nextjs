import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";

gsap.registerPlugin(Draggable);

export default function DraggableSVG() {
  const app = useRef();

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      Draggable.create(".box", {
      });

    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={app} className="draggablesvg">
      <div className="box w-20">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full max-h-full"
        >
          <circle cx="50" cy="50" r="45" fill="blue" />
        </svg>
      </div>
    </div>
  );
}