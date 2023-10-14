import ENV from "./env";

const CDN = "https://";
const DOMAIN = "smartfamily.ae";
const CLIENT_URL = ENV.IS_PRODUCTION
    ? `https://www.store.${DOMAIN}`
    : "http://localhost:3002";
const API_URL = !ENV.IS_PRODUCTION
    ? `https://www.api.${DOMAIN}`
    : "http://localhost:5002";

export default {
    CDN,
    DOMAIN,
    CLIENT_URL,
    API_URL,
};
