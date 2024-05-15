var namee = "Jose";
var mark = 0.39;
var result = "";

if(mark >= 0.8){
    result = namee+ " - A";
    console.log(result);
}else if(mark < 0.8 && mark >= 0.6){
    result = namee+ " - B";
    console.log(result);
}else if(mark < 0.6 && mark >= 0.4){
    result = namee+ " - C";
    console.log(result);
}else{
    result = namee+ " - No grade";
    console.log(result);
}
