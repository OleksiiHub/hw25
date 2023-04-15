

let calculator = {
  
    a:"", 
    b:"",
    ask(){
      this.a=+prompt("Enter a");
      this.b=+prompt("Enter b:");
    },
    sum(){
      return this.a+this.b;
    },
    mul(){
      return this.a*this.b;
    },
  };
  calculator.ask();
  alert(calculator.sum());
  alert(calculator.mul());

