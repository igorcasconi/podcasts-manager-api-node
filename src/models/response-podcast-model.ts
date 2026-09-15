import { PodcastModel } from "./podcast-model";

export interface ResponsePodcastModel {
  statusCode: number;
  body: PodcastModel[];
}
