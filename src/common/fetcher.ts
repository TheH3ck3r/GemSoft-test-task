import { kBaseEndpoint } from "./app";

export const BaseFetcher = (url: string) =>
  fetch(`${kBaseEndpoint}${url}`, { method: "GET" }).then((data) =>
    data.json()
  );

export const VacancyFetcher = (url: string) =>
  fetch(`${kBaseEndpoint}vacancy${url}`, { method: "GET" }).then((data) =>
    data.json()
  );
