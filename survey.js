const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pulledAnswers = [];

const showAnswers = (answers) => {
  console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`)
}

rl.question(`What's your name? Nicknames are also acceptable `, (answer1) => {
  pulledAnswers.push(answer1);
  
  rl.question(`What's an activity you like doing? `, (answer2) => {
    pulledAnswers.push(answer2);
    
    rl.question(`What do you listen to while doing that? `, (answer3) => {
      pulledAnswers.push(answer3);
      
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer4) => {
        pulledAnswers.push(answer4);
        
        rl.question(`What's your favourite thing to eat for that meal? `, (answer5) => {
          pulledAnswers.push(answer5);
          
          rl.question(`Which sport is your absolute favourite? `, (answer6) => {
            pulledAnswers.push(answer6);
            
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer6) => {
              pulledAnswers.push(answer6);
              
              rl.close();
              showAnswers(pulledAnswers)
            });
          });
        });
      });
    });
  });
});