export default function(value){
    if(!value || typeof value != "string"){
        return value;
    }
    const arr=value.split(' ');
    for(let i = 0 ; i < arr.length ; i++ ){
        const item = arr[i]
        if(item.length > 0){
            arr[i] = item[0].toUpperCase() + item.substr(1);
        }
    }
    return  arr.join(' ')
}