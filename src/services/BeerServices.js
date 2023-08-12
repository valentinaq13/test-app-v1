import api from "./AppServices";

const beers_url = "beers/";

class BeerServices {
  GetBeers = async () => {
    const request = await api.get(
         beers_url,
    );
    return request;
  };
  GetBeerDetail = async (id) => {
    const request = await api.get(
         beers_url + id,
    );
    return request;
  };
  GetBits = async (id, id_position) => {
    const request = await api.get(
      `${guides_url}${id}/get-bits/?id_position=${id_position}`,
      true
    );
    return request;
  };
  GetPublicBits = async (id, job_id) => {
    const request = await api.getPublic(
      guides_url + id + `/get-bits/?id_position=${job_id}`
    );
    return request;
  };
  GetBitContents = async (id) => {
    const request = await api.get(guides_url + id + "/get-bit-contents/", true);
    return request;
  };
  GetPublicBitContents = async (id) => {
    const request = await api.getPublic(guides_url + id + "/get-bit-contents/");
    return request;
  };
  CompleteListBit = async (bitId, guideId, jobId) => {
    const request = await api.post(
      guides_url + "bit-completed/",
      { job_position: jobId, bit: bitId, inter_guide_detail: guideId },
      true
    );
    return request;
  };
  GetUpdatedGuide = async () => {
    const request = await api.get(guides_url + "updated-guides/", true);
    return request;
  };
  GetCategories = async () => {
    const request = await api.get(guides_url + "categories/", true);
    return request;
  };
  GetSubcategories = async (categoryId) => {
    if (categoryId) {
      const request = await api.get(
        guides_url + `${categoryId}/subcategories/`,
        true
      );
      return request;
    } else {
      return [];
    }
  };

  CreateInterviewGuide = async (data) => {
    const formattedData = data;
    delete formattedData.steps;
    return await api.post(
      `${guides_url}create-interview-guide/`,
      formattedData,
      true
    );
  };

  GetInterviewGuides = async () =>
    await api.get(`${guides_url}get-interview-guides/`, true);

  GetPreviewBits = async (topics) => {
    if (topics.length) {
      const params = {
        topics: `[${topics.map((topic) => `"${topic}"`)}]`,
      };
      return await api.get(`${guides_url}preview-bits/`, true, params);
    } else {
      return [];
    }
  };

  PutGuidePrivacy = async (id) => {
    return await api.put(guides_url + `${id}/change-privacy/`, {}, true);
  };

  GetDefaultCovers = async () => {
    return await api.get(covers_url + `default-covers-inter-guides/`, true);
  };
}

const beer_services = new BeerServices();
export default beer_services;
