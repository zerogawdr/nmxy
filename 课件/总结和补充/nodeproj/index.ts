import "reflect-metadata"

// class User {
//     @Decriptor("姓名")
//     name: string

//     @Decriptor("年龄")
//     age: number

//     @Decriptor("性别")
//     gender: "男" | "女"
// }

// function print(obj: object) {
//     //输出obj对象的信息
//     const values = Object.values(obj); //该对象所有的属性值
//     for (const val of values) {
//         console.log(val);
//     }
// }

// const u = new User();
// u.name = "aaa";
// u.age = 32;
// u.gender = "女"

// print(u);


function PropDescriptor(info: string) {
    return Reflect.metadata("descriptor", info);
}

class User {

    @PropDescriptor("姓名")
    name: string

    @PropDescriptor("年龄")
    age: number

    gender:"男"|"女";
}

class Course{
    @PropDescriptor("课时")
    hours:number

    @PropDescriptor("课程名称")
    name:string
}

function print(obj: object) {
    const props = Object.keys(obj);
    for (const prop of props) {
        //如何得到obj对象的prop属性的描述信息
        let descriptor = Reflect.getMetadata("descriptor", obj, prop);
        if(!descriptor){
            descriptor = prop;
        }
        console.log(`${descriptor}: ${obj[prop]}`)
    }
}

// const u = new User;
// u.name = "kevin"
// u.age = 22;
// u.gender = "男";
// print(u);

const c = new Course();
c.name = "Vue"
c.hours = 60;
print(c);


