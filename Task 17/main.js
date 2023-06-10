class School{
constructor(name,level,numberofstudents){
   this._name=name;
   this._level=level;
   this._numberofstudents=numberofstudents;
}
 get name(){
   return this._name;
 }
 get level(){
    return this._level;
 }
 get numberofstudents(){
    return this._numberofstudents;
 }
 set numberofstudents(number){
     if(number.isNaN){
        console.log('Invalid input: numberOfStudents must be set to a Number.');
     }
     else{
        this._numberofstudents=number; 
     }
 }
 get quickFacts() {
    console.log( " "+this._name+" educates"+ this._numberofstudents+" students at the"+ this._level+" school level.");
 }
 static picksubstituteTeacher(substituteTeachers){
    const randomnum= math.floor( substituteTeachers.length*math.random());
 }

}
class Primary extends School {
constructor(name,numberofstudents,pickupPolicy){
    super(name,'primary',numberofstudents,sportsTeams);
   this._sportsTeams=sportsTeams;
   
}
get sportsTeams(){
   return  this._sportsTeams;
}
}
class Middle{
   
}
class High extends School{
   constructor(name,numberofstudents,){
      super(name,'primary',numberofstudents);
     this._pickupPolicy=pickupPolicy;
     
  }
  get pickupPolicy(){
     return  this._pickupPolicy;
  } 
}
const lorraineHansbury= new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
const sub=School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
const alSmith=new High('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);