import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext({ path: "/", navigate: () => {} });

export function RouterProvider({ children }) {
  const [path, setPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/",
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (to) => {
    if (to === path) return;
    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0 });
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
