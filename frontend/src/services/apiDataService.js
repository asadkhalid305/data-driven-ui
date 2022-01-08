import axios from "axios";
import { constantService } from "./constantService";

const baseUrl = constantService.baseUrl;

export const apiDataService = (function () {
  function getMetadata() {
    const url = baseUrl + "/metadata";
    return axios.get(url).then((res) => res.data);
  }

  function getMetadataConfig() {
    const url = baseUrl + "/metadata/config";
    return axios.get(url).then((res) => res.data);
  }

  function getCountries() {
    const url = baseUrl + "/countries";
    return axios.get(url).then((res) => res.data);
  }

  function callMetaSourceApi(url, method, body) {
    if (!url || !method) {
      return null;
    }

    url = baseUrl + url;
    method = method.toLowerCase();
    return axios[method](url, body).then((res) => res.data);
  }

  return {
    getMetadata,
    getMetadataConfig,
    callMetaSourceApi,
    getCountries
  };
})();
