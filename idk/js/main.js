// var 
// var scope
//var a = 10;
//console.log(a)

//for (var index = 0; index < 5; index++) {
//  console.log(index)};
//  console.log(index);

// let/const
//let x = 10;
//const y = 5;
//y +=10;
//console.log(y);

//for (let ind = 0; ind <5; ind++)
//{console.log(ind);}
//console.log(ind);

//string

//let string_example = "O HI";
//const full_name =  prompt("who ya?");
//let code = `<h1> u stupid </h1>;`

//if(!full_name) {document.getElementsByTagName("body")[0].innerHTML += code}
//else {const h2 = document.createElement("h2")
   //   h2.innerText = "ur name:" + full_name;
      // add in body
 //     document.getElementsByTagName("body")[0].prepend(h2);}
//number
//const age = parseInt(prompt("ur age?"));
//cvrt str -> numb : parsenint/ parsefloat
//age++;
//console.log("ur age next year" + age);
//document.writeln("ur age next year:  " + age);
//age--;
//document.writeln("ur age now: " + age);

//let x = 15;
//if (x % 2 == 0){ alert("even");}
//else if (x % 2 == 1){alert("odd")}

// oprator

// func n arrow func
//func

function sum(x, y) {
    return x + y;
  }
  
  console.log("Sum", sum(125523, 78547));
// arrow func
const sum1 = (x, y) => {
    return x + y;
  };
  
  console.log(sum1(12^2, 967));
  
// code challenges
function cutString(str) {return str.slice(0, 2);}

const cutStr =  (str) => str.slice(0, 2)
console.log(cutStr("o hi"));
