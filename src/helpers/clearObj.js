export function clearObj(obj, array) {
    const newObj = structuredClone(obj);
    for(let key in obj) {
        if (array.includes(key)) {
            delete newObj[key];
        }
    }
    return newObj;
}