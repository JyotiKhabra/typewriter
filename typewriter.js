const sentence = "hello there from lighthouse labs";
let i = 0;
for (const char in sentence) { 
    setTimeout(function() {
        //return function() {
            process.stdout.write(sentence[char]);
        //};
    }, i++ * 50,)
  }
    delay = sentence.length * 50
  setTimeout(function() {
    process.stdout.write("\n")
  },delay )
