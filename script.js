var name=new Array();
names[0]="Sandesh";
names[1]="Jenny";
names[2]="John";
names[3]="jefry";
names[4]="Asish";
names[5]="pola";
names[6]="ram";
names[7]="hari";
names[8]="vim";
names[9]="jerry";

for (var i = 0; i < names.length; i++){
  if(names[i].charAt(0)=='j' || names[i].charAt(0)=='J'){
    console.log("Goodbye"+ names[i])
  }
  else{
    console.log("Hello" + names[i])
  }
}
