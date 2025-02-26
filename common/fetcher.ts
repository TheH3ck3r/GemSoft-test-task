import { kBaseEndpoint } from "./app";

export const BaseFetcher = (url: string) =>
  fetch(`${kBaseEndpoint}${url}`, { method: "GET" }).then((data) =>
    data.json()
  );
