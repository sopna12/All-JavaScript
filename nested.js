let a = 120
let b = 100
let c = 110

if(a > b){
    if(a > c ){
        console.log(a, "a biggest");
    }
    else{
        console.log(c, "c biggest");
    }
}
else if(b > c){
    console.log(b, "b biggest");

}
else{
    console.log("c is biggest");
}