class Human{
  constructor(name,age,height){ 
  	this.name = name;
  	this.age = age;
  	this.height = height;
  }

   talk(){ 
     console.log (this.name + "speaks")
   }
 }

   class Man extends Human{
} 

let man =new Man("benjamin");
   man.talk()
