str="This is a demo string";
let rev='';
for(let i=str.length-1;i>=0;i--){
    rev+=str[i];
}
console.log(`the reverse of str is ${rev}`)