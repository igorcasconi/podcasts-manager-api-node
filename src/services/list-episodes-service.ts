import { PodcastModel } from "../models/podcast-model";
import { ResponsePodcastModel } from "../models/response-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<ResponsePodcastModel> => {
  let responseFormat: ResponsePodcastModel = {
    statusCode: 0,
    body: [],
  };
  const data = await repositoryPodcast();

  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
  responseFormat.body = data;

  return responseFormat;
};
