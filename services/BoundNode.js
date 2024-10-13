const {Bound} = require('./Bound')


class BoundNode {
    /**
     * Constructor for objects of class BoundNode
     */
     // constructor(Bound , BoundNode)
    myBound = null;
    next ;
    size;
    added=0;   // marking if the node was added to other node in some function
    // constructor( bb, otherNext){
    //     this.bb=bb;
    //     this.next=otherNext;
    //     this.size=this.bb.getSize();
    // }
     //constructor( Bound)
    constructor(bound){
        // let o = other.getBound();  //Bound
        // this.myBound = new Bound(o.getLeft(),o.getRight(),o.getTop(),o.getBottom());      
        this.myBound = bound;
        this.next = null;
        this.size = bound.getSize();
        this.added = 0;
    }

    
     //return double
    getSize(){
        return this.size;
    }
    //return BoundNode
    getNext(){
        return this.next;
    }
    // void             //BoundNode
    setNext(boundNode){
        this.next = boundNode;
    } 
       // void           int
    addSize(add){
        this.size += add;
    }
    //Bound
    getBound(){
        return this.myBound;
    }

    //void (int)
    setAd (x){
        this.added=x;
    }
    //return int
    getAd(){
        return this.added;
    }
    copyBoundNode(){
        let newBound =  this.myBound.copyBound() //new Bound(this.myBound.getLeft(),this.myBound.getRight(), this.myBound.getTop(), this.myBound.getBottom())
        return new BoundNode(newBound);
    }
    /******** combine "other" BoundNode to "this" BoundNod  , return int (BoundNode) **********************/
    addNode(otherBoundNode){
    /*****************************************************************************/
   // if ( other instanceof BoundNode ) {
        var otheBound = otherBoundNode.getBound();   // otheBound is Bound
    //    if(other instanceof Bound ){
        var otherLeft = otheBound.getLeft();
        let otherRight = otheBound.getRight();
        let otherTop = otheBound.getTop();
        let otherBottom = otheBound.getBottom();
        
        let thisLeft = this.myBound.getLeft();
        let thisRight = this.myBound.getRight();
        let thisTop = this.myBound.getTop();
        let thisBottom = this.myBound.getBottom(); 
                        
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

    myToString(){
     //   console.log('in BoundNode :', this.myBound.myToString()   )
        console.log('in BoundNode -  this.myBound :', this.myBound)//.myToString()  )
    }  //
    
}


module.exports = { BoundNode }