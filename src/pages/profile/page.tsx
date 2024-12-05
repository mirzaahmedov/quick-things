import { useLayout } from "@app/layout/hook";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  useLayout({ title: "Profile" });
  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default ProfilePage;
