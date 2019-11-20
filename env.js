const variables = {
  development: {
    googleApiKey: "AIzaSyBj5r6wDCe77Mat_0tyGOoZZAf05ll_XWsi4Ue0"
  },
  production: {
    googleApiKey: "wala pang laman"
  }
};

const getEnvVariables = () => {
  //// "AIzaSyBj5r6wDCe77Mat_0tyGOoZZAf05ll_XWsi4Ue0"
  if (__DEV__) {
    return variables.development;
  }
  return variables.production;
};

export default getEnvVariables;
