// //考虑一个电影系统，需要从服务器取电影、用户、影院等数据，这些数据有以下特点：
// //1. 所有的数据都是分页提供，请求时，需要传递page和limit
// //2. 所有的服务端数据返回的格式统一： {count:数据总量, data:[]}

// //如何构建代码，即能够保证程序的稳定性（鲁棒性，健壮性），同时尽量减少重复代码。
// import aixos from "axios";

// interface IDbData {
//     _id: string;
// }

// interface IMovie extends IDbData {
//     name: string;
//     ename: string;
//     area: string;
//     type: string;
// }

// interface IUser extends IDbData {
//     mobile: string;
//     pwd: string;
// }

// interface ICinema extends IDbData {
//     name: string;
//     addr: string;
// }

// interface IResp<T> {
//     count: number;
//     data: T[];
// }

// async function getPageData<T extends IDbData>(
//     url: string,
//     page: number = 1,
//     limit: number = 10
// ): Promise<IResp<T>> {
//     const resp = await aixos.get(url, {
//         params: {
//             page,
//             limit
//         }
//     });
//     return resp.data;
// }

// async function test() {
//     const resp = await getPageData<IMovie>(
//         "https://yuanjin.tech:5005/api/movie",
//         1,
//         2
//     );
//     resp.data.forEach(item => {
//         console.log(item.area, item.ename, item.name, item.type);
//     });
// }

// test();
