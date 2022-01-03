import axios from "axios";
import { constantService } from "./constantService";

const baseUrl = constantService.baseUrl;

export const apiDataService = (function () {
  function getStaticExampleEasyMetaData() {
    const url = baseUrl + "metadata/example/easy";
    return axios.get(url).then((res) => res.data);
  }

  return {
    getStaticExampleEasyMetaData,
  };
})();
