class God{

    static create(){
   const Adam=new Man()
   const Eva=new Woman()
   return [Adam,Eva]
     }
  }
  
  class Human{
  constructor(){
  
  }
  }
  class Man extends Human{
  constructor(){
  super()
  }
  }
  class Woman extends Human{
  constructor(){
  super()
  }
  }