function testVar(condition){
    var i;
    if(condition){
        i = 1;
    }
    else{
        i = 2;
        console.log(i)
    }
}

testVar();

function testLet(condition){
    if(condition){
        let i = 1;
    }
    else{
        let i = 2;
        console.log(i)
    }
}

testLet();