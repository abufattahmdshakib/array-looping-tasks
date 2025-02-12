// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`


const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

console.log(colors);

const rev_color = [];

for(let rong = 0 ; rong < colors.length; rong++){
    const rongs = colors[rong];
    rev_color.unshift(rongs);

}
console.log(rev_color)