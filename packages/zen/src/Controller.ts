import * as three from 'three'
import { Allocator } from './Allocator.js'
import { assertType, guard } from './utils.js'
export type GameObject = InstanceType<typeof three.Object3D>
export const vec3 = three.Vector3
export type Vec3 = InstanceType<typeof vec3>
export const vec2 = three.Vector2
export type Vec2 = InstanceType<typeof vec2>
export const scene = new three.Scene
export class Controller{
  gameObject: GameObject;
  tag: string = "";
  _memoryLocation!: number;
  static _updateIndex = 0;
  _temp!: Controller;
  _updateIndex: number;
  readonly isController = true;
  constructor(gameObject: GameObject){
    assertType<GameObject>("Is GameObject", gameObject, ()=>Object.hasOwn(gameObject, "isObject3D"))
    this.gameObject = gameObject
    this._updateIndex = Controller._updateIndex 
    Controller._updateIndex++
    scene.add(gameObject)
    this.Init()
    Controllers.push(this) 
  }
  Init(): void{

  }
  Update(): void{
    
  }
  _reset(): void{
    scene.remove(this.gameObject)
    Controllers[this._updateIndex] = Controllers[Controllers.length - 1]
    Controllers[this._updateIndex]._updateIndex = this._updateIndex
    Controller._updateIndex--
    Controllers.pop()
    this.gameObject = null as any as GameObject
    this.tag = ""
  }
  static New<T extends Controller>(this: {new(arg: GameObject):T, _pool?: Allocator<T, GameObject>},gameObject: GameObject): T{
    console.log("new", this._pool)
    if(!this._pool){
      this._pool= new Allocator(this)
    }
    return this._pool.alloc(gameObject)
  }
  static Destroy<T extends Controller>(this: {new(arg: GameObject):T, _pool?: Allocator<T, GameObject>}, target: T){
    if(this._pool){
      this._pool.free(target)
    }
  }
}
export function Destroy(target: GameObject | Controller){
  if(guard<GameObject>(target, ()=>Object.hasOwn(target, "isObject3D"))){
    scene.remove(target) 
  }else{
    assertType<Controller>("asserts destory target is Controller", target, ()=>Object.hasOwn(target, "isController")) 
    // @ts-ignore
    target.constructor.Destroy(target) 
  } 
}
declare global{
  var Controllers: Array<Controller>
}
globalThis.Controllers = []
export const defaultCamera = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
export function initializeScene(camera: three.PerspectiveCamera = defaultCamera,renderer: three.WebGLRenderer = new three.WebGLRenderer, el: HTMLElement = document.body, event: string = "resize"){ 
  renderer.setSize(el.offsetWidth, el.offsetHeight)
  function resize(){
    camera.aspect = el.offsetWidth / el.offsetHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize(el.offsetWidth, el.offsetHeight);
  }
  window.addEventListener(event, resize, false)
  window.addEventListener("resize", resize, false)
  el.appendChild(renderer.domElement)
  function tick(){
    for(let i=0; i<Controllers.length; i++){
      Controllers[i].Update()
    }
    renderer.render(scene, camera)
  }
  renderer.setAnimationLoop(tick)
}
