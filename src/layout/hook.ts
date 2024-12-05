import { useCallback, useEffect, useRef } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEventCallback = <T extends (...args: any[]) => any>(
  func?: T
): T | undefined => {
  const ref = useRef(func);
  useEffect(() => {
    ref.current = func;
  }, [func]);
  const cb = useCallback<T>(((...args) => ref.current?.(...args)) as T, []);

  if (!func) {
    return;
  }
  return cb;
};

type Layout = {
  title: string;
  onCreate?: () => void;
  onBack?: () => void;
};
type LayoutStore = Layout & {
  setLayout(state: Layout): void;
};
const useLayoutStore = create(
  persist<LayoutStore>(
    (set) => ({
      title: "",
      setLayout: (state) => set(state),
    }),
    {
      name: "layout",
    }
  )
);

type UseLayoutParams = {
  title: string;
  onCreate?: () => void;
  onBack?: () => void;
};
const useLayout = ({ title, onCreate, onBack }: UseLayoutParams) => {
  const { setLayout } = useLayoutStore();

  const onCreateCallback = useEventCallback(onCreate);
  const onBackCallback = useEventCallback(onBack);

  useEffect(() => {
    setLayout({
      title,
      onCreate: onCreateCallback,
      onBack: onBackCallback,
    });
  }, [setLayout, title, onCreateCallback, onBackCallback]);
};

export { useLayout, useLayoutStore };
