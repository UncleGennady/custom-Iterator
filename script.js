'use stript';
const arr = ['q','w','e','r','t','y'];
function customSymbolIterator(array) {
    let i = 0;
    const arr = structuredClone(array);
    return {
       arr,
        customNext(){
            if(!this.arr[i]) return {value:this.arr[i], done: true};
            const result = {value:this.arr[i], done:false};
            i++;
            return result
        },
    }
}
const arr1 = customSymbolIterator(arr);

console.log(arr1.customNext());
console.log(arr1.customNext());
console.log(arr1.customNext());
console.log(arr1.customNext());
console.log(arr1.customNext());
console.log(arr1.customNext());
console.log(arr1.customNext());
console.log(arr1.customNext());