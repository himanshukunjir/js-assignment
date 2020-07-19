




console.log("Rewarding the Employee");

let sales=parseInt(prompt("Enter your Yearly Sales"));
    console.log(sales);

switch (true){
    case sales<=5000:
    console.log(sales*0.02);
    break;


    case sales<=10000 && sales>=5001:
    console.log(sales*0.05);
    break;

    case sales<=20000 && sales>=10001:
    console.log(sales*0.07);
    break;

    case sales>=20001:
    console.log(sales*0.10);
    break;

   


}