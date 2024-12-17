import { RouterProvider } from "react-router-dom";
import { main } from "./parsed";
import { router } from "./router";
import { useEffect } from "react";
import { useLayoutStore } from "./layout/hook";

const App = () => {
  const { title, onCreate, onBack } = useLayoutStore();

  useEffect(() => {
    console.log(main());
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
      <div>
        <h1>{title}</h1>
        <button onClick={onCreate}>Create</button>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default App;
