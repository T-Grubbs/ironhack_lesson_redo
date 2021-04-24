//tesing git lessons
var hacker1 = "Roscoe";
console.log("The Drivers name is " +hacker1);

let hacker2 = prompt("What is the navigators name?");


if(hacker1.length > hacker2.length){
  console.log("The driver has the longer name, it has " +hacker1.length + " characters in it");
} else if(hacker1.length < hacker2.length){
  console.log("The navigator has the longer name, it has " +hacker2.length + " characters in it");
} else if(hacker1.length === hacker2.length){
  console.log("wow, you both got equally long names, " +hacker1.length +  " characters!!");
}

for(value of hacker1){
  let tank = [];
  let upper = value.toUpperCase();
  tank.push(upper);
  for(let i = 0; i >= value.length; i++){
    if(i < value.length){
      console.log([i]);
    };
  };

      console.log(upper)

};


// Function to reverse string
function ReverseString(str) {
   return str.split('').reverse().join('')
}
  
// Function call 
ReverseString(hacker2)



// function reverse(string){
//   console.log(string)
  
//   const str = string.length-1;
//   const hub = [];

//    for(let i = str; i >= 0; i--){
//     hub.push(str[i]);
//     console.log(hub)
    
//  }
// return hub.join('');

// }

// reverse('testin')