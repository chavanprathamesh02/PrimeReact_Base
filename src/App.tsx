import type { CSSProperties } from "react";
import { BrowserRouter } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import { LayoutProvider } from "./context/LayoutContext";
import { appTheme } from "./config/theme";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const themeVariables = {
    "--app-primary": appTheme.primary,
    "--app-logout": appTheme.logout,
    "--app-gradient-stops": appTheme.gradient.join(", "),
  } as CSSProperties;

  return (
    <div style={themeVariables}>
      <BrowserRouter>
        <LayoutProvider>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </LayoutProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
