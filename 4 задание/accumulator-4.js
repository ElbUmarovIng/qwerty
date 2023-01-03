const arr = ['adam','rasul','djahar','vaha','rizvan','ashab', 'aslan', 'malik','islam','yunus'];

let accumulator = []
for(i = 0; i < arr.length; i++){
    if(arr[i][0] === 'a'){
        accumulator.push(arr[i])
    }
}
console.log(accumulator)

