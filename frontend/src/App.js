import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TeamMemberList from "./pages/TeamMemberList";
import AddEditMember from "./pages/AddEditMember";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TeamMemberList />,
  },
  {
    path: "/add",
    element: <AddEditMember isEditingMember={false} />,
  },
  {
    path: "/edit/:id",
    element: <AddEditMember isEditingMember />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
