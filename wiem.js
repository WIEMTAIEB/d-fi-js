//exercice1//
function somme(a,b) {
    return a+b;
}
console.log(somme(2,3));
//exercice2//
function reverseString(str) {

 str = str.split("").reverse().join("");
    return str ;
}

console.log(reverseString ("WayToLearnX"));


//ex7//

function max(x,y,z){
    if(x>y) {
        max=x;
        if (z>max)
            max=z;
    } else {
        max=y;
        if (z>max)
            max=z;
    }
}
console.max(8,4,2);

// ex//
function inverse(x,y){ let z=0 z=x x=y y=z   
      return  + x +"" +""+y } console.log('inverse',inverse(5,6)) 

//ex//
      function affiche(nom,age,homme){            return "les nom de "+ nom+age+homme } console.log(affiche('ali',23,true))  

      //ex3// 
      function puissance(x,y){       return Math.pow(x,y) } console.log(puissance(4,2)) 

      //ex4// 
       function somme(a,b){               return(a+b)  } console.log (somme(4,-5)) 

       //ex5//
        function seconde(a){          return(a60) } console.log(seconde(5))  

        //ex6// 
        function increment(x){          return (x+1) } console.log(increment(5))

        //ex7// 
        function triangle(x,y){          let z=(xy)/2     return (z)  } console.log(triangle(7,3)) 

         //ex8// 
         function reverse(str) {     var splitString = str.split("");      var reverseArray = splitString.reverse();      var joinArray = reverseArray.join("");      return joinArray;  }  console.log ((reverse ('ali'))) 