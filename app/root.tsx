import stylesheet from "~/tailwind.css";
import generalStyleSheet from "./styles/index.css";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Toaster } from "./components/ui/toaster";
import NavBar from "./components/commons/NavBar";
import Footer from "./components/landing/Footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: generalStyleSheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
