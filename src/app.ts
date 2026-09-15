import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { HttpMethods } from "./utils/http-methods";
import { Routes } from "./routes/routes";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
) => {
  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethods.GET && baseUrl === Routes.FILTER) {
    await getFilterEpisodes(request, response);
  }
};
