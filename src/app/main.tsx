import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

import "./styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </Suspense>
  </BrowserRouter>
);
