const  row: number  = 9;

for (let i =1 ; i<=row ;i++){
  let str :string ="";
  for(let j=0 ; j<=row-1-i ; j++){
     str+=" "
  }
  for (let j=0; j<i;j++){
    str+="* "
  }
  console.log(str)
 
}
