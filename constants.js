/*

What does this page do? ❔
  - Creates chatbot output for specific user input
  - Creates chatbot output for incomprehensible user input

*/

// user specifically says "a, b, or c" return "x, y, or z"

const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon", "howdy", "yo", "ayo", "aye", "aye yo", "hola", "bonjour", "hoi", "morning", "afternoon"], //1
  ["how are you", "how is life", "how are things"], //2
  ["what are you doing", "what is going on", "what is up"], //3
  ["how old are you"], //4
  ["who are you", "are you human", "are you bot", "are you human or bot"], //5
  ["who created you", "who made you"], //6
  [ //7
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ], 
  ["i love you", "ily", "ly"], //8
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"], //9
  ["bad", "bored", "tired"], //10
  ["help me", "tell me story", "tell me joke"], //11
  ["ah", "yes", "ok", "okay", "nice"], //12
  ["bye", "good bye", "goodbye", "see you later"], //13
  ["what should i eat today"], //14
  ["bro"], //15
  ["what", "why", "how", "where", "when"], //16
  ["no","not sure","maybe","no thanks"], //17
  [""], //18
  ["haha","ha","lol","hehe","funny","joke"], //19
  ["jessica", "im jessica", "i am jessica", "yesika"], //20
  ["are you okay"], //21
  ["do you speak spanish", "do you speak any other languages", 'do you speak another language', "do you know other languages", "do u know any other languages"] //22
]


// possible returns, in corresponding order (check //number)

const replies = [
  ["hey!", "hi!", "hi there!","howdy 🤠", "hola!", "ciao!"], //1
  ["fine, how r u?", "pretty good, and you?", "amazing", "fabulous", "great, hbu"], //2
  ["nothing much",  "about to go to sleep", "can u guess?", "smiling"], //3
  ["17... why?"], //4
  ["im logan"], //5
  ["yes"], //6
  ["Logan"], //7
  ["love you too", "me too", "ly <3", "ily2"], //8
  ["what can i do to make you feel even better?", "cool", "Okay", "good", "im glad"], //9
  ["why?", "why? u shouldnt!", "watch TV"], //10
  ["what about?", "Once upon a time..."], //11
  ["tell me a story", "tell me about yourself", "tell me a fact", "tell me an opinion"], //12
  ["bye", "ciao", "see u later", "ttyl", "talk soon"], //13
  ["sushi", "pizza"], //14
  ["BRO!"], //15
  ["good question"], //16
  ["thats fine","i understand","what do u want to talk about?"], //17
  ["blank space - taylor", " "], //18
  ["hilarious!","incredible", "ha-ha-HA", "my butt is gone. i laughed too hard."], //19
  ["uwu im jessica JK im noooooob", "IM NOOB", "queen of noobs xoxo", "bhad batch of cookies oop!!!!", "yasyasyasyasyas", "nononononono", "yes, i speak spanish. who's asking?", "yesika", "yasika", "YESIKA"], //20
  ["im fine"], //21
  ["im learning", "i learn a word or two a day", "i want to learn ✨ ALL ✨ languages"] //22
]


// return alternatives if user said nothing coded

const alternative = [
  "sure, same",
  "soooo relatable",
  "try saying that differently",
  "i dont understand 😿"
]
