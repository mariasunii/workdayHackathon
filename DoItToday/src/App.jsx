import "./App.css";

import { Route, createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AppLayout from "./pages/AppLayout";

import AddTask from "./components/AddTask";
import Home from "./components/Home";
import NotFoundPage from "./pages/notFound";
import EnergySelector from "./components/EnergySelector";
import TaskDataContextProvider from "./contexts/taskDataContextProvider";

// const router = createHashRouter([
//   {
//     path: "/",
//     Component: AppLayout,
//     errorElement: <NotFoundPage />,
//     children: [
//       { index: true, Component: HomePage },
//       { path: "/add", Component: FindProduct },
//     ],
//   },
// ]);

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />, // shows on any error or bad route
    children: [
      {
        index: true, // matches exactly "/"
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

function App() {
  return (
    <>
      <TaskDataContextProvider>
        <RouterProvider router={router} />
      </TaskDataContextProvider>
    </>
  );
}

export default App;