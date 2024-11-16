import { Bound } from './Bound';


class BoundNode {
    /**
     * Constructor for objects of class BoundNode
     */
     // constructor(Bound , BoundNode)
    myBound: Bound;
    next: BoundNode | null = null;
    size: number;
    added: number = 0;  // marking if the node was added to other node in some function
    // constructor( bb, otherNext){
    //     this.bb=bb;
    //     this.next=otherNext;
    //     this.size=this.bb.getSize();
    // }
     //constructor( Bound)
    constructor(bound: Bound){
        // let o = other.getBound();  //Bound
        // this.myBound = new Bound(o.getLeft(),o.getRight(),o.getTop(),o.getBottom());      
        this.myBound = bound;
        this.size = bound.getSize();
    }

    
     //return double
    getSize(): number {
        return this.size;
    }
    //return BoundNode
    getNext(): BoundNode | null {
        return this.next;
    }
    // void             //BoundNode
    setNext(boundNode: BoundNode | null): void {
        this.next = boundNode;
    } 
       // void           int
    addSize(add: number): void {
        this.size += add;
    }
    //Bound
    getBound(): Bound {
        return this.myBound;
    }

    //void (int)
    setAd(x: number): void {
        this.added=x;
    }
    //return int
    getAd(): number {
        return this.added;
    }
    copyBoundNode(): BoundNode {
        let newBound =  this.myBound.copyBound() //new Bound(this.myBound.getLeft(),this.myBound.getRight(), this.myBound.getTop(), this.myBound.getBottom())
        return new BoundNode(newBound);
    }
    /******** combine "other" BoundNode to "this" BoundNod  , return int (BoundNode) **********************/
    /* @param otherBoundNode - The other BoundNode to combine with
    */
    addNode(otherBoundNode: BoundNode): void {
    /*****************************************************************************/
        const otheBound = otherBoundNode.getBound();   // otheBound is Bound
        const otherLeft = otheBound.getLeft();
        const otherRight = otheBound.getRight();
        const otherTop = otheBound.getTop();
        const otherBottom = otheBound.getBottom();
        
        const thisLeft = this.myBound.getLeft();
        const thisRight = this.myBound.getRight();
        const thisTop = this.myBound.getTop();
        const thisBottom = this.myBound.getBottom(); 
                        
        // case 1.1   // other bound is in the bottom of this.myBound and his right values is bigger or equal to this.myBound's right and left values is smaller or equal to this.myBound's values.
        if( (otherLeft<=thisLeft)&&(thisRight<=otherRight)&&(otherBottom<thisBottom)&&(thisBottom<=otherTop)&&(otherTop<thisTop))  
      //  if( (otherLeft<=thisLeft)&&(thisRight<=otherRight)&&(otherBottom<thisBottom)&&(thisBottom===otherTop)) 
        {
            this.myBound.setBottom(otherBottom);
            this.size=this.myBound.getSize();
            otherBoundNode.setAd(0);
        }        
         //4.3 // otheBound is above to this.myBound and his right values is bigger or equal to this.myBound's right and left values is smaller or equal to this.myBound's values.
        if( ( (otherLeft<=thisLeft)&&(thisRight<=otherRight)&&(otherBottom<=thisTop)&&(thisTop<otherTop)&&(thisBottom<otherBottom)))   
        //if( ( (otherLeft<=thisLeft)&&(thisRight<=otherRight)&&(otherBottom===thisTop)&&(thisTop<otherTop))) 
        {
            this.myBound.setTop(otherTop);
            this.size = this.myBound.getSize();
            otherBoundNode.setAd(0);
        }
        
          //2.3// otheBound from the right to this.myBound and the bottom of otheBound is lower than the bottom of this.myBound && the top of otheBound is higher than the top of this.myBound
        if( (otherTop>=thisTop) && (otherBottom<=thisBottom) &&  (thisRight<otherRight) && (otherLeft<=thisRight)&&(thisLeft<otherLeft))  
       // if( (otherTop>=thisTop) && (otherBottom<=thisBottom) &&  (thisLeft<otherLeft) && (otherLeft===thisRight))
        {
            this.myBound.setRight(otherRight);
            this.size=this.myBound.getSize();
            otherBoundNode.setAd(0);
        }
        
        //3.3// other Bound (otheBound) is at  the left of  this Bound (this.myBound) and the  bottom of otheBound is lower than the bottom of this.myBound &&top of otheBound is higher than the top of this.myBound
        if( (otherTop>=thisTop) && (otherBottom<=thisBottom) && (thisLeft<=otherRight)&&(otherLeft<thisLeft)&&(otherRight<thisRight)  )  
       // if( (otherTop>=thisTop) && (otherBottom<=thisBottom) && (thisLeft===otherRight)&&(otherRight<thisRight)  )
        {
            this.myBound.setLeft(otherLeft);
            this.size=this.myBound.getSize();
            otherBoundNode.setAd(0);
        } 
        
        /**** case 4.1- this Bound (this.myBound) is inside other bound (otheBound) *********/
        if( (otherTop>=thisTop) && (otherBottom<=thisBottom) && (otherLeft<=thisLeft)&&(thisRight<=otherRight)  )
        {    
            this.myBound.setTop(otherTop);
            this.myBound.setBottom(otherBottom);
            this.myBound.setLeft(otherLeft);
            this.myBound.setRight(otherRight);
            this.size=this.myBound.getSize();
            otherBoundNode.setAd(1);          
        }      
   // }
    }
   // }

    myToString(): void {
     //   console.log('in BoundNode :', this.myBound.myToString()   )
        console.log('in BoundNode -  this.myBound :', this.myBound)//.myToString()  )
    }  //
    
}


export { BoundNode };