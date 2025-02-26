import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { routes } from "./routes/index.tsx";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
        <RouterProvider router={routes} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
