import { kBaseEndpoint } from "./app";

export const GETBaseFetcher = (url: string) =>
  fetch(`${kBaseEndpoint}${url}`, { method: "GET" }).then((data) =>
    data.json()
  );
