import { useLoaderData } from "@remix-run/react";
import jQuery from "jquery";
global.$ = global.jQueryExample = jQuery;

export async function loader() {
  return { date: new Date() };
}

export default function Component() {
  const data = useLoaderData<typeof loader>();
  return `this is the example app ${data.date}`;
}
