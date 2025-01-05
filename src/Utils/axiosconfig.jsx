import axios from "axios";
const instance = axios.create({
  baseURL: "https://codehelp-apis.vercel.app/api/get-blogs",
});
export default instance;


