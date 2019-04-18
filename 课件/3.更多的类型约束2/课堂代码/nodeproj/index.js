"use strict";
//考虑一个电影系统，需要从服务器取电影、用户、影院等数据，这些数据有以下特点：
//1. 所有的数据都是分页提供，请求时，需要传递page和limit
//2. 所有的服务端数据返回的格式统一： {count:数据总量, data:[]}
Object.defineProperty(exports, "__esModule", { value: true });
//如何构建代码，即能够保证程序的稳定性（鲁棒性，健壮性），同时尽量减少重复代码。
const axios_1 = require("axios");
async function getPageData(url, page = 1, limit = 10) {
    const resp = await axios_1.default.get(url, {
        params: {
            page,
            limit
        }
    });
    return resp.data;
}
async function test() {
    const resp = await getPageData("https://yuanjin.tech:5005/api/movie", 1, 2);
    resp.data.forEach(item => {
        console.log(item.area, item.ename, item.name, item.type);
    });
}
test();
