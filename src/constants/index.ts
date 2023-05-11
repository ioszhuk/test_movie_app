const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error('Not found ENV:REACT_APP_API_BASE_URL');
}

export const constants = {
  app: {
    baseUrl: API_BASE_URL
  }
};
