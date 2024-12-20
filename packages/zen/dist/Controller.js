import * as three from 'three';
import { Allocator } from './Allocator.js';
import { assertType, guard } from './utils.js';
export const vec3 = three.Vector3;
export const vec2 = three.Vector2;
export const scene = new three.Scene;
export class Controller {
    constructor(gameObject) {
        this.tag = "";
        this.isController = true;
        assertType("Is GameObject", gameObject, () => Object.hasOwn(gameObject, "isObject3D"));
        this.gameObject = gameObject;
        this._updateIndex = Controller._updateIndex;
        Controller._updateIndex++;
        scene.add(gameObject);
        this.Init();
        Controllers.push(this);
    }
    Init() {
    }
    Update() {
    }
    _reset() {
        scene.remove(this.gameObject);
        Controllers[this._updateIndex] = Controllers[Controllers.length - 1];
        Controllers[this._updateIndex]._updateIndex = this._updateIndex;
        Controller._updateIndex--;
        Controllers.pop();
        this.gameObject = null;
        this.tag = "";
    }
    static New(gameObject) {
        console.log("new", this._pool);
        if (!this._pool) {
            this._pool = new Allocator(this);
        }
        return this._pool.alloc(gameObject);
    }
    static Destroy(target) {
        if (this._pool) {
            this._pool.free(target);
        }
    }
}
Controller._updateIndex = 0;
export function Destroy(target) {
    if (guard(target, () => Object.hasOwn(target, "isObject3D"))) {
        scene.remove(target);
    }
    else {
        assertType("asserts destory target is Controller", target, () => Object.hasOwn(target, "isController"));
        // @ts-ignore
        target.constructor.Destroy(target);
    }
}
globalThis.Controllers = [];
export const defaultCamera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
export function initializeScene(camera = defaultCamera, renderer = new three.WebGLRenderer, el = document.body) {
    renderer.setSize(el.offsetWidth, el.offsetHeight);
    function resize() {
        camera.aspect = el.offsetWidth / el.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(el.offsetWidth, el.offsetWidth);
    }
    window.addEventListener("resize", resize, false);
    el.appendChild(renderer.domElement);
    function tick() {
        for (let i = 0; i < Controllers.length; i++) {
            Controllers[i].Update();
        }
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(tick);
}
//# sourceMappingURL=Controller.js.map