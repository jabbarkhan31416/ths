

var isValidName = name => 
    isString(name) && name.split("").map(z => z.trim()).filter(z => z!=="").length > 2 ? true :
    false

var hoursAttended = (att,len) => {
    if(!(
        (typeof att === "number" || typeof att === "string")
        && (typeof len === "number" || typeof len === "string")
        && att !== ""
        && len !== ""
    )){
        return false
    }
    att = -(-att)
    len = -(-len)
    if(!(Number.isInteger(att)&&Number.isInteger(len))){
        return false
    }else if(0>att && 0>len){
        return false
    }
    return att<len
}

console.log(isValidName("Frank") === true);

console.log(hoursAttended(6,10) === true);

console.log(hoursAttended(6,"10") === true);

console.log(hoursAttended("6",10) === true);

console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);

console.log(isValidName(null) === false);

console.log(isValidName(undefined) === false);

console.log(isValidName("") === false);

console.log(isValidName("  \t\n") === false);

console.log(isValidName("X") === false);

console.log(hoursAttended("",6) === false);

console.log(hoursAttended(6,"") === false);

console.log("---  ",hoursAttended("","") === false);

console.log(hoursAttended("foo",6) === false);

console.log(hoursAttended(6,"foo") === false);

console.log(hoursAttended("foo","bar") === false);

console.log(hoursAttended(null,null) === false);

console.log(hoursAttended(null,undefined) === false);

console.log(hoursAttended(undefined,null) === false);

console.log(hoursAttended(undefined,undefined) === false);

console.log(hoursAttended(false,false) === false);

console.log(hoursAttended(false,true) === false);

console.log(hoursAttended(true,false) === false);

console.log(hoursAttended(true,true) === false);

console.log(hoursAttended(10,6) === false);

console.log(hoursAttended(10,"6") === false);

console.log(hoursAttended("10",6) === false);

console.log(hoursAttended("10","6") === false);

console.log(hoursAttended(6,10.1) === false);

console.log(hoursAttended(6.1,10) === false);

console.log(hoursAttended(6,"10.1") === false);

console.log(hoursAttended("6.1",10) === false);

console.log(hoursAttended("6.1","10.1") === false);