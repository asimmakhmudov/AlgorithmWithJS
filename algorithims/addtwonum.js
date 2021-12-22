let l1 = [4, 5, 7]
let l2 = [3, 2, 3]

var addtwonum = function(l1, l2) {
    var l12 = []
    revl1 = l1.reverse()
    revl2 = l2.reverse()

    for (var i = 0; i < Math.max(l1.length, l2.length); i++) {
        if(l1[i] !=0 && l2[i] !=0){
            l12.push((l1[i] || 0) + (l2[i] || 0));
        }
        else{
            return false
        }
      }
      return l12;
}

console.log(addtwonum(l1, l2));