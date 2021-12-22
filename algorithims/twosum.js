let nums = [1,8,6,4,8]
let target = 10;
let leng = nums.length;

var twosum = function(nums, target) {
    for(let i=0; i<leng; i++){
        for(let j=1; j<leng; j++){
            if(nums[i] + nums[j] == target){
                return console.log([i,j]); 
            } 
        }
    }

}
twosum(nums, target);