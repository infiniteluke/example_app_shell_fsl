import { useLoaderData } from "@remix-run/react";
import jQuery from "jquery";
global.$ = global.jQueryFSL = jQuery;

setTimeout(() => {
  // because remix creates a server build inside the FSL, it will look to resolve node_modules from within the FSL.
  // This is a problem because we want apps to be able to have distinct dependencies.
  console.log(global.jQueryFSL === global.jQueryExample);
  // true
}, 1000);

export async function loader() {
  return { date: new Date() };
}

export default function Component() {
  const data = useLoaderData<typeof loader>();
  return `Cool! defined from within FSL ${data.date}`;
}
