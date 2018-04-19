/**
 * get array index;
 * @param  {[array, number]}
 * @return {[number]}
 */
export default function getArrIndex(arr, itemName) {
    let index = null;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i].id === itemName) {
            index = i;
            break;
        }
    }
    return index;
}