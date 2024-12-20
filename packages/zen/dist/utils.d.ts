export declare function assert(name: string, fn: () => boolean): void;
export declare function assertType<T>(name: string, target: unknown, fn: () => boolean): asserts target is T;
export declare function guard<T>(target: unknown, fn: () => boolean): target is T;
//# sourceMappingURL=utils.d.ts.map