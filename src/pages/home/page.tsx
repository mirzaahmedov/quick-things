import { Link } from "react-router-dom";
import { useLayout } from "@app/layout/hook";
import { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);

  useLayout({
    title: "Home",
    onCreate() {
      setCount((count) => count + 1);
    },
    onBack() {
      setCount((count) => count - 1);
    },
  });

  return (
    <div>
      <h1>Home Page</h1>
      <p>count: {count}</p>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default HomePage;
