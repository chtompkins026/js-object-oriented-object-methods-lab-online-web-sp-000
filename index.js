

function BoardMember(name, homeState, training){ 
   this.veto = function(){
    console.log(`No, I must disagree`);
  }; 
  
   this.approve = function(){
    console.log(`You can do that!`);
  }; 
  
   this.doCharity = function(){
    console.log(`I like to help people.`);
  }; 
  
  this.releasePressStatement = function(){
    console.log(`I like to help people.`);
  }; 
  
}