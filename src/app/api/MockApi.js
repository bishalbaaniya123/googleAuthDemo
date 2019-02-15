import Api from "./api";

export default class MockApi extends Api {
    testApi() {
        console.log("this is from testApi");
        return {"a": "b"};
    }
}





