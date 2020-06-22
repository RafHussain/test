import HomeService from './HomeService';

const DEMO = false;

export class Api {
  constructor(authToken, demo = DEMO) {
    this.token = authToken;
    this.demo = demo;
    this.home = new HomeService(this, demo);
  }
}

export default Api;
