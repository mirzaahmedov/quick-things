import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useLayoutStore } from "./layout/hook";

const App = () => {
  const { title, onCreate, onBack } = useLayoutStore();

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
