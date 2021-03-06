import { useEffect, useRef } from "react";
import type { DependencyList, EffectCallback } from "react";


export default function useCompareEffect(effect: EffectCallback, deps: DependencyList, depsEqual: (oldDeps: DependencyList, nextDeps: DependencyList) => boolean): void {
  const ref = useRef<DependencyList>(undefined)

  if (ref.current === undefined || !depsEqual(deps, ref.current)) {
    ref.current = deps
  }

  useEffect(effect, ref.current)
}