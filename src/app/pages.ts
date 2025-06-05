import { lazy } from "react";

const LoginPage = lazy(() =>
  import("@pages/login").then((module) => ({ default: module.Login }))
);

export { LoginPage };
