const user1 = {
    loginid: "bangbangji",
    loginpwd: "123456",
    name: "棒棒鸡",
    address: {
        province: "四川省",
        city: "成都市"
    }
};
const user2 = {
    loginid: "xiaobaitu",
    loginpwd: "654321",
    name: "小白兔"
};
//将user1中属性address保存的地址赋值给user2的属性address
user2.address = user1.address;
user2.address.city = "广元市";
console.log(user1.address.city, user2.address.city); //输出：？

