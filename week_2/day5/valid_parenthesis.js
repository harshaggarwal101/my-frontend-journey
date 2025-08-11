/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2!=0){
        return false;
    }
    const stack =[];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i < s.length; i++) {
        if(s[i]=='('||s[i]=='{'||s[i]=='['){
            stack.push(s[i]);
        }
        else{
            if(stack.length===0){
                return false;
            }
            const top=stack.length-1;
            if(pairs[s[i]]==stack[top]){
                stack.pop();
            }else{
                return false;
            }
        }
        
    }
    return stack.length===0;
    
};