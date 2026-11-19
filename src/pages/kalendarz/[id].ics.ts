import type { APIRoute } from "astro";
import { meczIcs, sciezkiKalendarza } from "../../lib/kalendarz";
import type { MeczLks } from "../../lib/terminarz";

export const getStaticPaths = sciezkiKalendarza;

export const GET: APIRoute = ({ props, site }) => {
  const adres = new URL(import.meta.env.BASE_URL.replace(/\/?$/, "/") + "terminarz/", site).href;
  return new Response(meczIcs(props.m as MeczLks, "pl", adres), {
    headers: { "Content-Type": "text/calendar; charset=utf-8" },
  });
};
