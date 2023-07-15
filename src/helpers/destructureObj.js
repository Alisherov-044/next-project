export function destructureObj(obj, props = []) {
    const newObj = structuredClone(obj);
    for(let key in obj) {
        for(let i = 0; i < props.length; i++) {
            if(key === props[i].key) {
                let res = ''
                props[i].values.map(value => res += ` ${newObj[key][value]}`)
                newObj[key] = res;
            }
        }
    }
    return newObj;
}