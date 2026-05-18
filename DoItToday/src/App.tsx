import "./App.css";

import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import AppLayout from "./pages/AppLayout";
import NotFoundPage from "./pages/notFound";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import EnergySelector from "./components/EnergySelector";
import TaskDataContextProvider from "./contexts/taskDataContextProvider";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "selectEnergy/",
        element: <EnergySelector />,
      },
      {
        path: "addTask/",
        element: <AddTask />,
      },
    ],
  },
]);

/**
 * Root application component.
 * Wraps the app in a task data context and provides the router.
 */
function App() {
  return (
    <TaskDataContextProvider>
      <RouterProvider router={router} />
    </TaskDataContextProvider>
  );
}

export default App;
