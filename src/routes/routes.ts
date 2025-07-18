type Route = {
  path: string;
  name: string;
  showOnMenu?: boolean;
};

export const routes: Route[] = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/gallery", name: "Gallery" },
  { path: "/team", name: "Meet the team" },
  { path: "/contact", name: "Contact" },
];
