///ARRAY METHOD///

// //Task 1
// function myFunction(a, n) {
// return a[n-1];
// }



// //Task2
// function myFunction(a) {
//    return a.slice(3);
// }


// //Task3
// function myFunction(a){ 
//     return a.slice(-3);
// }


// //Task4
// function myFunction(a) {
//     return a.slice(0, 3);
//  }



//  //Task5

// function myFunction(a, n) {
//     return a.slice(-n);
//   }

// //Task6

// function myFunction( a, b ) {
//     return a.filter(cur => cur !== b)
//   }


// //Task7
  
// function myFunction(a) {
//     return a.length;
//  }

//  //Task8
 
// function myFunction(a) {
//     return a.filter((el) => el < 0).length;
//  }


//  //Task9
//  function myFunction( arr ) {
//     return arr.sort()
//     }

// //Task10
// function myFunction( arr ) {
//     return arr.sort((a, b) => b - a)
//   }

// //Task11

// function myFunction(a) {
//     return a.reduce((acc, cur) => acc + cur, 0);
//  }

//  //Task12
//   function myFunction( arr ) {
//     return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
//     }

// //Task13

// function myFunction(arr) {
//     let longest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > longest.length) {
//             longest = arr[i];
//         }
//     }
//     return longest;
// }


// //Task14
// function myFunction( arr ) {
//   return arr.every(element => element === arr[0]);
//   }


// //Task15
// function myFunction( ...arrays ) {
//     return arrays.flat()
//     }



// //Task16
// function myFunction(arr) {
//     return arr.sort((x, y) => x.b - y.b);
// }




// //task17
// functionmyFunction(a, b) {
// const cem = myFunction.flat();
//  for (let i = 0; i < mergedArray.length; i++) {
//         if (!uniqueArray.includes(mergedArray[i])) {
//             uniqueArray.push(mergedArray[i]);

//  uniqueArray.sort((x, y) => x - y);

// return uniqueArray;
//         }
//     }
// }






///OBJECTS METHOD///

// //Task1

// function myFunction(obj) {
//     return obj.country
//   }


// //Task2

// function myFunction(obj) {
//     return obj['prop-2']
//   }

// //Task3
// function myFunction(obj, key) {
//     return obj[key]
//   }

// //Task4
// function myFunction(a, b) {
//     return b in a;
//  }


//  //Task5
//  function myFunction(a, b) {
//     return Boolean(a[b]);
//  }


//  //Task6

//  function myFunction(a) {
//     return { key: a };
//  }


//  //Task7
//  function myFunction(a, b) {
//     return { [a]: b };
//  }



//  //Task8
//  function myFunction(a, b) {
//     return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
//  }


//  //Task9

//  function myFunction(a) {
//     return Object.keys(a);
//  }
 


//  //Task10


//  //Task11
//  function myFunction(a) {
//     return Object.values(a).reduce((sum, cur) => sum + cur, 0);
//  }


//  //Task12
//  function myFunction(obj) {
//     const { b, ...rest } = obj;
//     return rest;


// //Task13
// function myFunction(x, y) {
//     const { b, ...rest } = y;
//     return { ...x, ...rest, d: b };
//   }





