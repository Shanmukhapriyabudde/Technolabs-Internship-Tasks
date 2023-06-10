let raceNumber = Math.floor(Math.random() * 1000);
let register=true;
let runnerage=25;
if(runnerage>18 && register){
    raceNumber+=1000;
}
 if(runnerage>18 && register){
  console.log(`${raceNumber}: race will start at 9:30 am. `);
}

else if(runnerage>18 && !(register)){
  console.log(`${raceNumber}: race will start at 11:00 am. `);
}
else if(runnerage<18 ){
  console.log(`${raceNumber}: race at 11:00 am. `);
}
else {
  console.log(`${raceNumber}: see the registration desk `);
}

