import { Controller, scene } from "./Controller.js";
export class Allocator {
    constructor(object) {
        this.object = object;
        this.available = [];
        this.all = [];
        this.count = 0;
    }
    alloc(args) {
        if (this.available.length > 0) {
            console.log('reused');
            this.temp = this.all[this.available.pop()];
            this.temp._updateIndex = Controller._updateIndex;
            Controller._updateIndex++;
            console.log(`reused with index ${this.temp._updateIndex}`);
            this.temp.gameObject = args;
            this.temp.Init();
            Controllers.push(this.temp);
            scene.add(args);
            console.log(`The controoler len is ${Controllers.length}`);
        }
        else {
            console.log('allocated');
            this.temp = new this.object(args);
            this.temp._memoryLocation = this.count;
            this.count++;
            this.all.push(this.temp);
        }
        return this.temp;
    }
    free(item) {
        item._reset();
        this.available.push(item._memoryLocation);
    }
}
//# sourceMappingURL=Allocator.js.map