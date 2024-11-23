"use strict";
// src/controllers/boundController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.boundController = void 0;
const Algoquest_1 = require("../services/Algoquest");
const Bound_1 = require("../services/Bound");
class BoundController {
    constructor() {
        this.Algoquest = new Algoquest_1.Algoquest();
    }
    run(req, res) {
        console.log('Algoquest ALGORITHM HAS STARTED!', req.body);
        const boundspre = req.body.bounds;
        const mainBound = req.body.mainBound;
        console.log('the bounds:', boundspre);
        const bounds = boundspre.map((bound) => {
            return new Bound_1.Bound(parseInt(bound.left), parseInt(bound.right), parseInt(bound.up), parseInt(bound.down));
        });
        console.log('bounds after map:', bounds);
        const list = this.Algoquest.findMax(parseInt(mainBound.left), parseInt(mainBound.right), parseInt(mainBound.up), parseInt(mainBound.down), bounds);
        let myNode = null;
        if (list) {
            myNode = list.getHead(); // myNode is BoundNode
            while (myNode !== undefined && (myNode === null || myNode === void 0 ? void 0 : myNode.getNext()) !== null) {
                // console.log('boundNode in list answer:', myNode.myToString());
                myNode = myNode === null || myNode === void 0 ? void 0 : myNode.getNext();
            }
            const ans = this.Algoquest.findTheMaxBound(list);
            console.log("The Algorithm's answer ========>:", ans);
            console.log('bounds after map:', bounds);
            const boundAns = {
                left: ans === null || ans === void 0 ? void 0 : ans.getLeft(),
                right: ans === null || ans === void 0 ? void 0 : ans.getRight(),
                up: ans === null || ans === void 0 ? void 0 : ans.getTop(),
                down: ans === null || ans === void 0 ? void 0 : ans.getBottom(),
            };
            console.log('boundAns:', boundAns);
            res.send(boundAns);
        }
    }
}
const boundController = new BoundController();
exports.boundController = boundController;
