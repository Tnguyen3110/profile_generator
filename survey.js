const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r3 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r4 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? `, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  
  r2.question(`What's an activity you like doing? `, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    
    r3.question(`What do you listen to while doing that? `, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);

      r4.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        
        r4.close();
    
        r3.close();

        r2.close();
        rl.close();
      });
    });
  });
});