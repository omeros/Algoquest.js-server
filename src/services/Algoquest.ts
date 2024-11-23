

/**
 * The algorithem for Finds the largest Bound in a given Main Bound .
 * 
 * // author (Omer Golan)
 */
import { Bound } from './Bound';
import { BoundNode } from './BoundNode';
import { BoundList } from './BoundList';


class Algoquest {
    /* Constructor for objects of class Algoquest */

    count: number = 0;
    counEreaIsBlock: number = 0 ;
    counEreaIsClear: number = 0 ;
    constructor() {
    }

    /********* checking if a given area is clear of shapes  ,return  boolean(double,double,double,double,Bound[] )***********************************/
    ereaIsClear( l: number,  r: number,  t: number,  b: number,  arrayOfShaps: Bound[]): boolean {
        ////console.log(` ereaIsClear:33 function count  new: ${this.counEreaIsClear}`);   
        //////console.log('ereaIsClear:34 - l: ',l, 'r:',r, 't:',t, 'b:',b);
        this.counEreaIsClear++;
        let length = arrayOfShaps.length;
        let i;
        for (i = 0; i < length; i++) {
            let t2: number = arrayOfShaps[i].getTop();
            let b2: number = arrayOfShaps[i].getBottom(); 
            let r2: number = arrayOfShaps[i].getRight(); 
            let l2: number = arrayOfShaps[i].getLeft(); 
            ////console.log('ereaIsClear:47 - t2: ',t2, 'b2:',b2, 'r2:',r2, 'l2:',l2);
            // check if the size of the rectangle is smaller than pixel 1
            if (((t - b) <= 1) || ((r - l) <= 1)) {
                ////console.log('ereaIsClear :50 - true');
                return  true;
            }
            // top left top right
            if ((((b < t2) && (t2 <= t) && (l <= l2) && (l2 < r)) || (b < t2) && (t2 <= t) && (l < r2) && (r2 <= r))) {
                ////console.log('ereaIsClear:55  - false');
                return   false;
            }
            // bottom left bottom right
            if (((b <= b2) && (b2 < t) && (l <= l2) && (l2 < r)) || ((b <= b2) && (b2 < t) && (l < r2) && (r2 <= r))) {
                ////console.log('ereaIsClear:60  - false');
                return  false;
            }
            // top and bottom of other is in this bound
            if (((b < t2) && (t2 <= t) && (l2 <= l) && (r <= r2))
                    || ((b <= b2) && (b2 < t) && (l2 <= l) && (r <= r2))) {
                        ////console.log('ereaIsClear:66  - false');
                return  false;
            }
            // right and left of other is in this bound
            if (((b2 <= b) && (t <= t2) && (l <= l2) && (l2 < r))
                    || ((b2 <= b) && (t <= t2) && (l < r2) && (r2 <= r))) {
                        ////console.log('ereaIsClear:72  - false');
                return  false;
            }
            // the array of Bounds is cover the coordinates
            if ((b2 <= b) && (t <= t2) && (l2 <= l) && (r <= r2)) {
                ////console.log('ereaIsClear:77  - false');
                return  false;
            }
            // the array of Bounds is inside of the coordinates
            if ((b <= b2) && (t2 <= t) && (l <= l2) && (r2 <= r)) {
                ////console.log('ereaIsClear:82  - false');
                return  false;
            }
        }
        ////console.log('ereaIsClear:86  - true');
        return  true;
    }

    /** check to see if the Bound is full of shapes, return  boolean(double,double,double,double,Bound[] )  *******************************/
    ereaIsBlock(l: number ,r: number ,t: number ,b: number ,arrayOfShaps: Bound[]): boolean{
        ////console.log(" ereaIsBlock function count: ", this.counEreaIsBlock);
        this.counEreaIsBlock++;
        
        // can be "&&" as well
        if (((t - b) <= 1) || ((r - l) <= 1)) {  
            ////console.log('ereaIsBlock:97 - true');
            return  true;
        }

        if (this.coordinatesInShap(l, r, t, b, arrayOfShaps)) {
            ////console.log('ereaIsBlock:102 - true');
            return  true;
        }
        if ( this.ereaIsClear(l, r, t, b, arrayOfShaps)) {
            ////console.log('ereaIsBlock:106 - false');
            return false;
        }

        // if (!ereaIsClear(l,r,t,b,arrayOfShaps ) )
        // {
        // return true;
        // }

        return ( this.ereaIsBlock(l, ((r - l) / 2) + l, t, ((t - b) / 2) + b, arrayOfShaps))
                && ( this.ereaIsBlock(((r - l) / 2) + l, r, t, ((t - b) / 2) + b, arrayOfShaps))
                && ( this.ereaIsBlock(l, ((r - l) / 2) + l, ((t - b) / 2) + b, b, arrayOfShaps))
                && ( this.ereaIsBlock(((r - l) / 2) + l, r, ((t - b) / 2) + b, b, arrayOfShaps));

    }

    /******************* checking if a given coordinates is in a shape Bound, return  boolean(double,double,double,double,Bound[] ) **************/
    coordinatesInShap(l: number ,r: number ,t: number ,b: number ,arrayOfShaps:Bound[]): boolean{
        let i: number;   //int
        let top: number;  //double
        let botttom: number;  //double
        let left: number;    //double
        let right: number;    //double
        for (i = 0; i < arrayOfShaps.length; i++) {
            top = arrayOfShaps[i].getTop();
            botttom = arrayOfShaps[i].getBottom();
            left = arrayOfShaps[i].getLeft();
            right = arrayOfShaps[i].getRight();
            if (((botttom <= b) && (t <= top) && (left <= l) && (r <= right))) {
                return true;
            }
        }
        return false;

    }

    /************* The Main algorithm - return  BoundList(double,double,double,double,Bound[] ) ****************************************************/
    findMax(l: number ,r: number ,t: number ,b: number ,arrayOfShaps: Bound[]):BoundList|null {
        ////console.log(" Main function count : " , this.count);
        this.count++;
        if ( this.ereaIsClear(l, r, t, b, arrayOfShaps)) {
            ////console.log( 'true in ereaIsClear in finMax')
            let newB: Bound = new Bound(l, r, t, b);   //Bound
            let bn: BoundNode = new BoundNode(newB);  //BoundNode
            let b1: BoundList =  new BoundList(bn);   // BoundList
            return b1
        }
        //////console.log( 'false in ereaIsClear in finMax')
        if ( this.ereaIsBlock(l, r, t, b, arrayOfShaps)) {
            ////console.log( 'true in ereaIsBlock in finMax')
            return null;
        }

        let b1: BoundList|null = null;   //BoundList
        let b2: BoundList|null = null;   //BoundList
        let b3: BoundList|null = null;   //BoundList
        let b4: BoundList|null = null;   //BoundList

        b1 =  this.findMax(l, ((r - l) / 2) + l, t, ((t - b) / 2) + b, arrayOfShaps); // left top
        b2 =  this.findMax(((r - l) / 2) + l, r, t, ((t - b) / 2) + b, arrayOfShaps); // right top
        b3 =  this.findMax(l, ((r - l) / 2) + l, ((t - b) / 2) + b, b, arrayOfShaps); // left bottom
        b4 =  this.findMax(((r - l) / 2) + l, r, ((t - b) / 2) + b, b, arrayOfShaps); // right bottom

            let b5: BoundList|null  = this.unitTheGroup(b1, b2, b3, b4);
            return b5;
        
        return null
    }

    

    unitTheGroup(
      b1: BoundList | null,
      b2: BoundList | null,
      b3: BoundList | null,
      b4: BoundList | null
    ): BoundList | null {
      let f1: BoundList | null;
      let f2: BoundList | null;
      let f3: BoundList | null;
      let f4: BoundList | null;
      let f5: BoundList | null;
      let f6: BoundList | null;
      let f7: BoundList | null;
      let f8: BoundList | null;
      let f9: BoundList | null;
      let f10: BoundList | null;
      let f11: BoundList | null;
  
      if (b1 !== null && b2 !== null && b3 !== null && b4 !== null) {
        const b11 = b1.copyList()!;
        const b12 = b2.copyList()!;
        const b13 = b3.copyList()!;
        const b14 = b4.copyList()!;
  
        b1.refresh();
        b2.refresh();
  
        f4 = b1.combine(b2)!;
        f5 = b2.combine(b1)!;
        f4.refresh();
        f5.refresh();
        f5 = f5.combine(f4)!;
        f5 = f5.unit(f4)!;
  
        f6 = b3.combine(b4)!;
        f7 = b4.combine(b3)!;
        f7 = f7.combine(f6)!;
        f6 = f6.combine(f7)!;
        f6.refresh();
        f7.refresh();
        f7 = f7.unit(f6);
  
        f5.refresh();
        f7.refresh();
        f7 = f7.combine(f5)!;
        f5 = f5.combine(f7)!;
        f5.refresh();
        f7.refresh();
        f5 = f5.unit(f7);
  
        f8 = b11.combine(b13)!;
        f9 = b13.combine(f8)!;
        f8.refresh();
        f9.refresh();
        f9 = f9.combine(f8)!;
        f9 = f9.unit(f8);
  
        f10 = b12.combine(b14)!;
        f11 = b14.combine(f10)!;
        f11 = f11.combine(f10)!;
        f10 = f10.combine(f11)!;
        f10.refresh();
        f11.refresh();
        f11 = f11.unit(f10);
  
        f9.refresh();
        f11.refresh();
        f11 = f11.combine(f9)!;
        f9 = f9.combine(f11)!;
        f9.refresh();
        f11.refresh();
        f9 = f9.unit(f11);
  
        f9 = f9.combine(f5)!;
        f5 = f5.combine(f9)!;
        f5.refresh();
        f9.refresh();
        f9 = f9.unit(f5);
  
        return f9;
      }
  
      // Handle cases where only three lists are not null
      if (b1 !== null && b2 !== null && b3 !== null && b4 === null) {
        f1 = b1.combine(b2)!;
        f2 = b2.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f2 = f2.unit(f1);
  
        f3 = f2.combine(b3)!;
        f4 = b3.combine(f3)!;
        f4 = f4.combine(f3)!;
        f3.refresh();
        f4.refresh();
        f4 = f4.unit(f3);
        return f4;
      }
  
      if (b1 !== null && b2 !== null && b3 === null && b4 !== null) {
        f1 = b1.combine(b2)!;
        f2 = b2.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f2 = f2.unit(f1);
  
        f2 = f2.combine(b4)!;
        f3 = b4.combine(f2)!;
        f3 = f3.combine(f2)!;
        f3.refresh();
        f2.refresh();
        f4 = f3.unit(f2);
        return f4;
      }
  
      if (b1 !== null && b2 === null && b3 !== null && b4 !== null) {
        f1 = b1.combine(b3)!;
        f2 = b3.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f2 = f1.unit(f2);
  
        f3 = f2.combine(b4)!;
        f4 = b4.combine(f3)!;
        f4 = f4.combine(f3)!;
        f3.refresh();
        f4.refresh();
        f4 = f4.unit(f3);
        return f4;
      }
  
      if (b1 === null && b2 !== null && b3 !== null && b4 !== null) {
        f1 = b2.combine(b3)!;
        f2 = b3.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f1 = f1.unit(f2);
  
        f3 = f1.combine(b4)!;
        f4 = b4.combine(f1)!;
        f4 = f4.combine(f3)!;
        f3.refresh();
        f4.refresh();
        f4 = f3.unit(f4);
        return f4;
      }
  
      // Handle cases where only two lists are not null
      if (b1 === null && b2 === null && b3 !== null && b4 !== null) {
        f1 = b3.combine(b4)!;
        f2 = b4.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f2 = f2.unit(f1);
        return f2;
      }
  
      if (b1 !== null && b2 === null && b3 === null && b4 !== null) {
        f1 = b1.combine(b4)!;
        f2 = b4.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f2 = f2.unit(f1);
        return f2;
      }
  
      if (b1 !== null && b2 !== null && b3 === null && b4 === null) {
        f1 = b1.combine(b2)!;
        f2 = b2.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f2 = f2.unit(f1);
        return f2;
      }
  
      if (b1 !== null && b2 === null && b3 !== null && b4 === null) {
        f1 = b1.combine(b3)!;
        f2 = b3.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f2 = f2.unit(f1);
        return f2;
      }
  
      if (b1 === null && b2 !== null && b3 !== null && b4 === null) {
        f1 = b2.combine(b3)!;
        f2 = b3.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f2 = f2.unit(f1);
        return f2;
      }
  
      if (b1 === null && b2 !== null && b3 === null && b4 !== null) {
        f1 = b2.combine(b4)!;
        f2 = b4.combine(f1)!;
        f2 = f2.combine(f1)!;
        f1.refresh();
        f2.refresh();
        f2 = f2.unit(f1);
        return f2;
      }
  
      // Handle cases where only one list is not null
      if (b1 !== null && b2 === null && b3 === null && b4 === null) {
        return b1;
      }
  
      if (b1 === null && b2 !== null && b3 === null && b4 === null) {
        return b2;
      }
  
      if (b1 === null && b2 === null && b3 !== null && b4 === null) {
        return b3;
      }
  
      if (b1 === null && b2 === null && b3 === null && b4 !== null) {
        return b4;
      }
  
      // If none of the conditions are met, return null
      return null;
    }
  
  

    
  
 
    /** find the max Bound in an List of boundsNodes,  return  Bound(BoundList) *********************/
    findTheMaxBound( List: BoundList){
        if (List !== null) {   
            let p1:BoundNode|null = List.getHead();   // p1 is BoundNode
            let maximal:BoundNode|null  = p1;  //BoundNode
            let max:number = 0;   //double
            let s;  //double
            while (p1 !== null) {
                s = p1.getSize();
                if (max < s) {
                    max = s;
                    maximal = p1;
                }
                p1 = p1.getNext();
            }
            if(maximal){
                let ans: Bound|null =  maximal.getBound();   //Bound        
                return ans
            }else{
                return null;
            }
        }
        return null;
    }

}
export  {Algoquest}
