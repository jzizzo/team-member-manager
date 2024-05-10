import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TeamMemberList from "./pages/TeamMemberList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TeamMemberList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
