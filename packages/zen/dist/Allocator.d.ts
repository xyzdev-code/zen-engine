import { Controller, type GameObject } from "./Controller.js";
export declare class Allocator<T extends Controller, U extends GameObject> {
    readonly object: {
        new (args: U): T;
    };
    available: number[];
    all: T[];
    count: number;
    temp: T;
    constructor(object: {
        new (args: U): T;
    });
    alloc(args: U): T;
    free(item: T): void;
}
//# sourceMappingURL=Allocator.d.ts.map