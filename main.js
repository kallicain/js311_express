let express = require("express");

let app = express()

app.use(express.json());

app.get("/add", function(req, res){
  let num1 = req.query.num1;
  let num2 = req.query.num2;
  let number1 = Number(num1);
  let number2 = Number(num2);
  let sum = number1 + number2;

    res.send(`${number1} + ${number2} = ${sum}`);
})

app.get("/negate", function(req, res){
  let num = req.query.num;
  let number = Number(num);

  if(number < 0){
    res.send(`${Math.abs(number)}`);
  } else {
    res.send(`${-Math.abs(number)}`);
  }
})

app.post("/multiply", function(req, res){
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let number1 = Number(num1);
  let number2 = Number(num2);
  let sum = number1 * number2;

  res.send(`${number1} * ${number2} = ${sum}`)
})

app.listen(9001, function(){
  console.log("App has begun");
})