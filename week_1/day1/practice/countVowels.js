const str="my name is khan"
let i;
let count=0;
for(i=0;i<str.length;i++){
    if("aeiouAEIOU".includes(str[i])){
        count=count+1;
    }
}
console.log(`There are ${count} vowels`);
