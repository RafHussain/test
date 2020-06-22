import url from 'url'

// set app mode
const AppMode = [process.env.REACT_APP_ENV];

// set API URLs
const urlObj = url.parse(document.location.href, true);

const production = urlObj.protocol + '//' + urlObj.hostname + ":" + urlObj.port;
const development = production

let baseURL = '';
switch (AppMode[0])
{
  case 'development':
    baseURL = development;
    break;
  case 'production':
    baseURL = production;
    break;
  default:
    baseURL = process.env.REACT_APP_URL;
}

export { baseURL };
