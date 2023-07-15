export function* range(start, stop, step = 1) {
    for(let i = start; i <= stop; i += step) {
        yield i;
    }
}