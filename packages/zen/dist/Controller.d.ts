import * as three from 'three';
import { Allocator } from './Allocator.js';
export type GameObject = InstanceType<typeof three.Object3D>;
export declare const vec3: typeof three.Vector3;
export type Vec3 = InstanceType<typeof vec3>;
export declare const vec2: typeof three.Vector2;
export type Vec2 = InstanceType<typeof vec2>;
export declare const scene: three.Scene;
export declare class Controller {
    gameObject: GameObject;
    _tag: string;
    get tag(): string;
    set tag(newName: string);
    _memoryLocation: number;
    static _updateIndex: number;
    _temp: Controller;
    _updateIndex: number;
    readonly isController = true;
    private constructor();
    Init(): void;
    Update(): void;
    _reset(): void;
    static New<T extends Controller>(this: {
        new (arg: GameObject): T;
        _pool?: Allocator<T, GameObject>;
    }, gameObject: GameObject): T;
    static Destroy<T extends Controller>(this: {
        new (arg: GameObject): T;
        _pool?: Allocator<T, GameObject>;
    }, target: T): void;
}
export declare function Destroy(target: GameObject | Controller): void;
declare global {
    var Controllers: Array<Controller>;
}
export declare const defaultCamera: three.PerspectiveCamera;
export declare function initializeScene(camera?: three.PerspectiveCamera, renderer?: three.WebGLRenderer, el?: HTMLElement, event?: string): void;
//# sourceMappingURL=Controller.d.ts.map