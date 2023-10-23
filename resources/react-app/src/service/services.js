import axiosInstance from "../utils/axiosClient";

const contactPost = async (data) => {
  const result = await axiosInstance.post("contact", data);
  return result;
};

const fetchHomeSlider = async () => {
  const result = await axiosInstance.get("get-slider");
  return result;
};
const fetchFairsSlider = async () => {
  const result = await axiosInstance.get("upcoming-fairs");
  return result;
};
const fetchpriceFile = async () => {
  const result = await axiosInstance.get("files");
  return result;
};

const exportFunction = {
  contactPost,
  fetchHomeSlider,
  fetchFairsSlider,
  fetchpriceFile,
};

export default exportFunction;
