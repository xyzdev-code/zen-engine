export function assert(name, fn) {
    if (!fn()) {
        throw new Error(`[ERROR] Assert ${name} failed`);
    }
}
export function assertType(name, target, fn) {
    if (!fn()) {
        throw new Error(`[ERROR] Type assertion ${name} failed.`);
    }
}
export function guard(target, fn) {
    return fn();
}
//# sourceMappingURL=utils.js.map