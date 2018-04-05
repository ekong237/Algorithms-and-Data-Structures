
var isOneEditDistance = function(s1, s2) {
    let longer = (s1.length > s2.length) ? s1 : s2;
    let shorter = (longer === s2) ? s1 : s2;

    if (shorter.length === 0 && longer.length - shorter.length === 1) {
        return true;
    }
    if (longer.length - shorter.length > 1) {
        return false;
    } 
    let p1 = 0;
    let p2 = 0;
    let count = 0;
    // console.log(longer.length);
    
    while(p1 < longer.length || p2 < longer.length) {
        console.log(longer[p1], shorter[p2], count);

        if ((longer[p1] === undefined || shorter[p2] === undefined) && count > 1) {
            return false;
        } else if (longer.length === shorter.length && longer[p1] !== shorter[p2]) {
            count++;
            p1++;
            p2++;
        } else if (longer[p1] !== shorter[p2]) {
            console.log('longer not', longer[p1], shorter[p2]);
            p1++
            count++;
        } else {
          p1++;
          p2++;
        }
        console.log(longer[p1], shorter[p2]);
        // p1 = (longer[p1+1]) ? p1+1 : p1;
        // p2 = (shorter[p2+1]) ? p2+1 : p2;
        
        console.log('>', longer[p1], shorter[p2]);
    }
    console.log(count);
    return count === 1;
};

console.log(isOneEditDistance('abc','acd'));