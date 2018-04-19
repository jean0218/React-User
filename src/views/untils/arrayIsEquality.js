/**
 * array is equality
 * @param  {[array, array]}
 * @return {[number]}
 */
export default function arrayIsEquality(arr1, arr2){
    const arr1Len = arr1.length,
          arr2Len = arr2.length;
    if(arr1Len !== arr2Len){
        return true;
    }
    for(let i = 0; i < arr1Len; i++){
        for(let name in arr1[i]){
            if(arr1[i][name] !== arr2[i][name]){
                return true;
                break;
            }            
        }
    }
    return false;
}