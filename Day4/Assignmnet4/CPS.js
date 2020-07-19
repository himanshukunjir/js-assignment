console.log("CALCULATOR,PERCENTAGE,SQRT");


    let calculator=prompt("1.ADDITION,2.SUBRATION ,3.MULTIPLICATION,4.DIVISION,5.SQUARE ROOT,6.PECENTAGE");
    console.log(calculator)

     
        let a = parseInt(prompt("Enter the First value to be added"));
        console.log(a);
        let b=parseInt(prompt("Enter the Second value"))
        console.log(b);

         switch (true){
        case calculator==1:
        console.log(a+b);
        alert(a+b);
        break;


        case calculator==2:
        console.log(a-b);
        alert(a-b);
        break;

        case calculator==3:
        console.log(a*b);
        alert(a*b);
        break;

        case calculator==4:
        console.log(a/b);
        alert(a/b);
        break;

        case calculator==5:
        console.log(Math.sqrt(a));
       
        break;

        case calculator==6:
        console.log((a/b)*100);
        alert((a/b)*100);
        break;
         }