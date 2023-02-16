// make a search to google places api
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=Atlanta&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw
export const searchGoogleAPI = (query) => {
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`);
};