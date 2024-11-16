// src/controllers/boundController.ts

import { Request, Response } from 'express';
import { Algoquest } from '../services/Algoquest';
import { Bound } from '../services/Bound';
import { BoundNode } from '../services/BoundNode';

interface BoundInput {
  left: string;
  right: string;
  up: string;
  down: string;
}

interface MainBoundInput {
  left: string;
  right: string;
  up: string;
  down: string;
}

class BoundController {
  private Algoquest: Algoquest;

  constructor() {
    this.Algoquest = new Algoquest();
  }

  run(req: Request, res: Response): void {
    console.log('Algoquest ALGORITHM HAS STARTED!', req.body);

    const boundspre: BoundInput[] = req.body.bounds;
    const mainBound: MainBoundInput = req.body.mainBound;

    console.log('the bounds:', boundspre);

    const bounds = boundspre.map((bound: BoundInput) => {
      return new Bound(
        parseInt(bound.left),
        parseInt(bound.right),
        parseInt(bound.up),
        parseInt(bound.down)
      );
    });

    console.log('bounds after map:', bounds);

    const list = this.Algoquest.findMax(
      parseInt(mainBound.left),
      parseInt(mainBound.right),
      parseInt(mainBound.up),
      parseInt(mainBound.down),
      bounds
    );
    let myNode = null
    if(list){
      myNode= list.getHead(); // myNode is BoundNode
      while (myNode !== undefined && myNode?.getNext() !== null) {
        // console.log('boundNode in list answer:', myNode.myToString());
        myNode = myNode?.getNext();
      }
    

    const ans = this.Algoquest.findTheMaxBound(list);

    console.log("The Algorithm's answer ========>:", ans);
    console.log('bounds after map:', bounds);

    const boundAns = {
      left: ans?.getLeft(),
      right: ans?.getRight(),
      up: ans?.getTop(),
      down: ans?.getBottom(),
    };

    console.log('boundAns:', boundAns);

    res.send(boundAns);
    }
  }
}

const boundController = new BoundController();

export { boundController };
