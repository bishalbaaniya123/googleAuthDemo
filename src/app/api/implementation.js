import api from './api';

export default class Implementation extends api {
    constructor(url) {
        super();
        this.url = url;
        console.log(this.url);
    }

}