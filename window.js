const name = "Jasim Uddin";
function add(num1,num2){
    const result = num1 + num2;
    console.log("This is call fro function inside",result,name);

    function double(num){
        return num * 2;
    }

    var total = double(result);
    return total;
    // return result;

}

const output = add(10, 15);

console.log("This is called from outside",output,name);