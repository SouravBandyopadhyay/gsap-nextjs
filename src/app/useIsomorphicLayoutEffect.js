import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;


// For an intro animations in React, we typically reach for useLayoutEffect, but because Next.js does SSR, our console will fill up with warnings for every animated component you have on your page. To avoid this we can apply useIsomorphicLayoutEffect instead of useEffect