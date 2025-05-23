

/**
 * The algorithem for Finds the largest Bound in  a given Main Bound .
 * 
 * // author (Omer Golan)
 */

const {Bound} = require('./Bound')
const {BoundNode} = require('./BoundNode')
const {BoundList} = require('./BoundList')

//  module.exports = {
//     ereaIsClear,
//     ereaIsBlock,
//     coordinatesInShap,
//     findMax,
//     unitTheGroup,
//     findTheMaxBound
// }

class Algoquest {
    /* Constructor for objects of class Algoquest */

    count = 0;
    counEreaIsBlock = 0 ;
    counEreaIsClear = 0 ;
    constructor() {
    }

    /********* checking if a given area is clear of shapes  ,return  boolean(double,double,double,double,Bound[] )***********************************/
    ereaIsClear( l,  r,  t,  b,  arrayOfShaps){
        ////console.log(` ereaIsClear:33 function count  new: ${this.counEreaIsClear}`);   
        //////console.log('ereaIsClear:34 - l: ',l, 'r:',r, 't:',t, 'b:',b);
        this.counEreaIsClear++;
        let length = arrayOfShaps.length;
        let i;
        for (i = 0; i < length; i++) {
            let t2 = arrayOfShaps[i].getTop();
            let b2 = arrayOfShaps[i].getBottom(); 
            let r2 = arrayOfShaps[i].getRight(); 
            let l2 = arrayOfShaps[i].getLeft(); 
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
    ereaIsBlock( l,  r,  t,  b,  arrayOfShaps){
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
    coordinatesInShap( l,  r,  t,  b, arrayOfShaps){
        let i;   //int
        let top;  //double
        let botttom;  //double
        let left;    //double
        let right;    //double
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
    findMax( l,  r,  t,  b,  arrayOfShaps) {
        ////console.log(" Main function count : " , this.count);
        this.count++;
        if ( this.ereaIsClear(l, r, t, b, arrayOfShaps)) {
            ////console.log( 'true in ereaIsClear in finMax')
            let newB = new Bound(l, r, t, b);   //Bound
            let bn = new BoundNode(newB);  //BoundNode
            let b1 =  new BoundList(bn);   // BoundList
            return b1
        }
        //////console.log( 'false in ereaIsClear in finMax')
        if ( this.ereaIsBlock(l, r, t, b, arrayOfShaps)) {
            ////console.log( 'true in ereaIsBlock in finMax')
            return null;
        }

        let b1 = null;   //BoundList
        let b2= null;   //BoundList
        let b3= null;   //BoundList
        let b4= null;   //BoundList

        b1 =  this.findMax(l, ((r - l) / 2) + l, t, ((t - b) / 2) + b, arrayOfShaps); // left top
        b2 =  this.findMax(((r - l) / 2) + l, r, t, ((t - b) / 2) + b, arrayOfShaps); // right top
        b3 =  this.findMax(l, ((r - l) / 2) + l, ((t - b) / 2) + b, b, arrayOfShaps); // left bottom
        b4 =  this.findMax(((r - l) / 2) + l, r, ((t - b) / 2) + b, b, arrayOfShaps); // right bottom

        let b5 = this.unitTheGroup(b1, b2, b3, b4);
        return b5;

    }

    
  //  unit the bounds in 4 difference lists of Bounds to one list of bound ,return  BoundList(BoundList,BoundList,BoundList,BoundList ) 
    unitTheGroup( b1,  b2,  b3,  b4) {
        //////console.log('unitTheGroup: 210, ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
        let f1;       //BoundList
        let f2;      //BoundList
        let f3;      //BoundList
        let f4;     //BoundList
        let f5;     //BoundList
        let f6;     //BoundList
        let f7;     //BoundList
        let f8;     //BoundList
        let f9;     //BoundList
        let f10;     //BoundList
        let f11;     //BoundList



        if ((b1 !== null) && (b2 !== null) && (b3 !== null) && (b4 !== null)) {
            let b11 = b1.copyList()
            let b12 = b2.copyList()
            let b13 = b3.copyList()
            let b14 = b4.copyList()
          //  ////console.log('unitTheGroup:217 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);

            // f1 = b1.combine(b3);
            // f3 = b3.combine(b1);
            // f1 = f1.combine(f3); 
            // f3 = f3.combine(f1); 
            // f1.refresh();
            // f3.refresh();
            // f1 = f1.unit(f3);
            
            // f2 = b2.combine(b4); 
            // f4 = b4.combine(b2);
            // f2 = f2.combine(f4); 
            // f4 = f4.combine(f2); 
            // f2.refresh();
            // f4.refresh();
            // f2 = f2.unit(f4);


            // f1 = f1.combine(f2); 
            // f2 = f2.combine(f1);
            // f1.refresh();
            // f2.refresh();
            // f1 = f1.unit(f2);

            /************************* THE BASIC    **********************************************/

            // f1 = b1.combine(b2); // combine b1 and b2 to new list- f1
            // f2 = b2.combine(f1);
            // f1.refresh();
            // f2.refresh();
            // f2 = f2.combine(f1)

            // f1 = f1.unit(f2);

            // f1 = f1.combine(b3); // combine f1 and b3 to new list- f1
            // f2 = b3.combine(f1);
            // f2 = f2.combine(f1)
            // f1.refresh();
            // f2.refresh();

            // f1 = f1.unit(f2);

            // f1 = f1.combine(b4); // combine f1 and b4 to new list- f1
            // f2 = b4.combine(f1);
            // f2 = f2.combine(f1)
            // f1.refresh();
            // f2.refresh();
            // f1 = f1.unit(f2);
            /************************************* left + rigth - top then left = rigth -  bottom then add the result of both ********************************************** */
            b1.refresh();
            b2.refresh();
        
            f4 = b1.combine(b2); // combine b1 and b2 to new list- f4  ,  f1 => f4, f2 => f5, f3 => f6, f4 => f7
            f5 = b2.combine(b1);
            f4.refresh();
            f5.refresh();
            f5 = f5.combine(f4)
            f5 = f5.unit(f4);


            //b3.refresh();
           // b4.refresh();
            f6 = b3.combine(b4); // combine b4 and b3 to new list- f6
            f7 = b4.combine(b3);
            f7 = f7.combine(f6)
            f6 = f6.combine(f7)
            f6.refresh();
            f7.refresh();
            f7 = f7.unit(f6);


            f5.refresh();
            f7.refresh();
            f7 = f7.combine(f5);
            f5 = f5.combine(f7); // combine f4 and f7 to new list- f1
            f5.refresh();
            f7.refresh();
            f5 = f5.unit(f7);

        /************************************* left top  +  left bottom then rigth top + right bottom then add the result of both ********************************************** */
            f8 = b11.combine(b13); // combine b1 and b2 to new list- f4  ,  f1 => f4, f2 => f5, f3 => f6, f4 => f7
            f9 = b13.combine(f8);
            f8.refresh();
            f9.refresh();
            f9 = f9.combine(f8)
            f9 = f9.unit(f8);


            //b3.refresh();
           // b4.refresh();
            f10 = b12.combine(b14); // combine b4 and b3 to new list- f6
            f11 = b14.combine(f10);
            f11 = f11.combine(f10)
            f10 = f10.combine(f11)
            f10.refresh();
            f11.refresh();
            f11 = f11.unit(f10);


            f9.refresh();
            f11.refresh();
            f11 = f11.combine(f9);
            f9 = f9.combine(f11); // combine f4 and f7 to new list- f1
            f9.refresh();
            f11.refresh();
            f9 = f9.unit(f11);

            /*************************************************************** */ 
            f9 = f9.combine(f5); // combine f4 and f1 to new list- f1
            f5 = f5.combine(f9);
            f5.refresh();
            f9.refresh();
            f9 = f9.unit(f5);

            return f9; 
            //return f5; 
            //return f1; 
        }
        // 1 list are null
        if ((b1 !== null) && (b2 !== null) && (b3 !== null) && (b4 === null)) {
        //    ////console.log('unitTheGroup:242 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b1.combine(b2); // combine b1 and b2 to new list- f1
            f2 = b2.combine(f1);
            f2 = f2.combine(f1)
            // f1=f1.combine(f2);
            // f2=f2.combine(f1);
            f1.refresh();
            f2.refresh();
            f2 = f2.unit(f1);

            f3 = f2.combine(b3); // combine f1 and b3 to new list- f1
            f4 = b3.combine(f3);
            f4 = f4.combine(f3)
            f3.refresh();
            f4.refresh();
            // f4=f4.combine(f3);
            // f4=f3.combine(f4);
            f4 = f4.unit(f3);
            return f4;
        }

        if ((b1 !== null) && (b2 !== null) && (b3 === null) && (b4 !== null)) {
      //      ////console.log('unitTheGroup:260 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b1.combine(b2); // combine b1 and b2 to new list- f1
            f2 = b2.combine(f1);
            f2 = f2.combine(f1)
            f1.refresh();
            f2.refresh();
            f2 = f2.unit(f1);

            f2 = f2.combine(b4); // combine f2 and b4 to new list- f1
            f3 = b4.combine(f2);
            f3 = f3.combine(f2)
            f3.refresh();
            f2.refresh();
            f4 = f3.unit(f2);
            return f4;
        }

        if ((b1 !== null) && (b2 === null) && (b3 !== null) && (b4 !== null)) {
       //     ////console.log('unitTheGroup:274 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b1.combine(b3); // combine b1 and b3 to new list- f1
            f2 = b3.combine(f1);
            f2 = f2.combine(f1)
            f1.refresh();
            f2.refresh();
            f2 = f1.unit(f2);

            f3 = f2.combine(b4); // combine f2 and b4 to new list- f1
            f4 = b4.combine(f3);
            f4 = f4.combine(f3)
            f3.refresh();
            f4.refresh();
            f4 = f4.unit(f3);

            return f4;

        }
        if ((b1 === null) && (b2 !== null) && (b3 !== null) && (b4 !== null)) {
      //      ////console.log('unitTheGroup:289 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b2.combine(b3); // combine b2 and b3 to new list- f1
            f2 = b3.combine(f1);
            f2 = f2.combine(f1)
            f1.refresh();
            f2.refresh();
            f1 = f1.unit(f2);

            f3 = f1.combine(b4); // combine f1 and b4 to new list- f1
            f4 = b4.combine(f1);
            f4 = f4.combine(f3)
            f3.refresh();
            f4.refresh();
            f4 = f3.unit(f4);
            return f4;
        }
        /// 2 lists are null
        if ((b1 === null) && (b2 === null) && (b3 !== null) && (b4 !== null)) {
      //      ////console.log('unitTheGroup:303 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b3.combine(b4); // combine b3 and b4 to new list- f1
            f2 = b4.combine(f1);
            f2 = f2.combine(f1)
            f1.refresh();
            f2.refresh();
            f2 = f2.unit(f1);
            return f2;
        }
        if ((b1 !== null) && (b2 === null) && (b3 === null) && (b4 !== null)) {
       //     ////console.log('unitTheGroup:311 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b1.combine(b4); // combine b1 and b4 to new list- f1
            f2 = b4.combine(f1);
            f2 = f2.combine(f1)
            f1.refresh();
            f2.refresh();
            f2 = f2.unit(f1);
            return f2;
        }
        if ((b1 !== null) && (b2 !== null) && (b3 === null) && (b4 === null)) {
      //      ////console.log('unitTheGroup:317 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b1.combine(b2); // combine b1 and b2 to new list- f1
            f2 = b2.combine(f1);
            f2 = f2.combine(f1)
            f1.refresh();
            f2.refresh();
            f2 = f2.unit(f1);
            return f2;
        }
        if ((b1 !== null) && (b2 === null) && (b3 !== null) && (b4 === null)) {
       //     ////console.log('unitTheGroup:324 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b1.combine(b3); // combine b1 and b3 to new list- f1
            f2 = b3.combine(f1);
            f2 = f2.combine(f1)
            f1.refresh();
            f2.refresh();
            f2 = f2.unit(f1);
            return f2;
        }

        if ((b1 === null) && (b2 !== null) && (b3 !== null) && (b4 === null)) {
       //     ////console.log('unitTheGroup:332 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b2.combine(b3); // combine b2 and b3 to new list- f1
            f2 = b3.combine(f1);
            f2 = f2.combine(f1)
            f1.refresh();
            f2.refresh();
            f2 = f2.unit(f1);
            return f2;
        }
        if ((b1 === null) && (b2 !== null) && (b3 === null) && (b4 !== null)) {
       //     ////console.log('unitTheGroup:339 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            f1 = b2.combine(b4); // combine b2 and b4 to new list- f1
            f2 = b4.combine(f1);
            f2 = f2.combine(f1)
            f1.refresh();
            f2.refresh();
            f2 = f2.unit(f1);
            return f2;
        }
        // one list is not null
        if ((b1 !== null) && (b2 === null) && (b3 === null) && (b4 === null)) {
    //        ////console.log('unitTheGroup:347 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            return b1;
        }
        if ((b1 === null) && (b2 !== null) && (b3 === null) && (b4 === null)) {
     //       ////console.log('unitTheGroup:351 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            return b2;
        }
        if ((b1 === null) && (b2 === null) && (b3 !== null) && (b4 === null)) {
    //        ////console.log('unitTheGroup:355 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            return b3;
        }
        if ((b1 === null) && (b2 === null) && (b3 === null) && (b4 !== null)) {
     //       ////console.log('unitTheGroup:359 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
            return b4;
        }
      //  ////console.log('unitTheGroup:363 , ba:',b1, 'b2:',b2, 'b3:',b3, 'b4:',b4);
        return null;
    }

    /** find the max Bound in an List of boundsNodes,  return  Bound(BoundList) *********************/
    findTheMaxBound( List){
        if (List !== null) {   
            let p1 = List.getHead();   // p1 is BoundNode
            let maximal = p1;  //BoundNode
            let max = 0;   //double
            let s;  //double
            while (p1 !== null) {
                s = p1.getSize();
                if (max < s) {
                    max = s;
                    maximal = p1;
                }
                p1 = p1.getNext();
            }
            let ans =  maximal.getBound();   //Bound        
            return ans
        }
        return null;
    }

}
module.exports = {Algoquest}
