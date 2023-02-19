//const proxyurl = "https://cors-anywhere.herokuapp.com/";

// make a search to google places api
// https://maps.googleapis.com/maps/api/place/textsearch/json?query=Atlanta&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw
export const searchGooglePlaces = (query) => {
  //console.log(proxyurl+`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`);
  //return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  return fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyDEHGBibTeuDpUclYDLNXIAZ0J7NKWewJw`);
};