import { BoundNode } from './BoundNode';


class BoundList {
  /*************** Constractor **************/
  head: BoundNode | null = null;
    // constractor () {
        
    // }
    /****** constructor(BoundNode )***********************/
    constructor(boundNode: BoundNode) {
    /*********************************************************************/
        this.head = boundNode;
    }
    /******************** return the head - BoundNode *************************************************/
    getHead(): BoundNode | null {
    /*******************************************************************/
        return this.head;
    }
  /****** combine two lists to one list ****return BoundList(BoundList)****************/
  combine(otherList: BoundList|null): BoundList | null {
        if ((otherList != null) ){      
                     //&&(other!=undefined)) {
            let otherNode: BoundNode | null = otherList.getHead();   // otherNode is BoundNode
            while ( (otherNode != null)) {
              this.addToList(otherNode); // adding the first Node in the other List  to this list
                otherNode = otherNode.getNext();
            }
            //this.addToList(otherNode);
            return this;
        }
        return otherList;
    }

  /****************** add each node to another in the same list  , return void ***********************/
    refresh(): void {
        let p1: BoundNode | null = this.getHead();  // p1 is BoundNode
        let p2: BoundNode | null = this.getHead();  //p2 is BoundNode
        p2 = p2?.getNext() || null;
        while ((p1 != null)) {

        // addToList(p1);
            while (p2 != null) {
                if (p1 != p2) {
                    p1.addNode(p2);
                }
                p2 = p2.getNext();
            }
            p2 = this.getHead();
            p1 = p1.getNext();
        }
        // addToList(p1);
    }

    /************* adding other Node to this list , return void(BoundNode)********************************************/
    addToList(other: BoundNode): void{ // other = BoundNode
       // if ( (other != null)&&(other != undefined) ) {
      //  if(other){
        //if ( other instanceof BoundNode ) {
        if(other.getAd() == 1){
            return
        }
            let myNode: BoundNode | null =  this.getHead();  // myNode is  BoundNode
            // while ((myNode !=undefined)&&(myNode.getNext() != null) ) {
            while (myNode && myNode.getNext() != null) {
            //  console.log('addToList : ', other.myToString() ) 
                myNode.addNode(other);
                myNode = myNode.getNext();
            }
            if (myNode) {
                myNode.addNode(other);
                if (other.getAd() === 0) {
                    const o = other.getBound();
                    const a = new BoundNode(o);
                    myNode.setNext(a);
                }
            }
      //  }
    }

  /************* connect this list( last bound) with other list( head bound) return BoundList(BoundList) ********************************************/
    unit( otherList: BoundList): BoundList {
        let myNode: BoundNode | null = this.getHead();  // myNode is BoundNode
        while (myNode && myNode.getNext() != null) {
            myNode = myNode.getNext();
        }
        const otherNode = otherList.getHead();   // otherNode is BoundNode
        // p2.setNext(p1); // part of the answers, - short run time
        if (myNode) {
            myNode.setNext(otherNode);
        }// all the answers, - long run time
        return this;
    }
    // return string
    myToString(): void {
            let myNode: BoundNode | null  = this.getHead();   // myNode is BoundNode
            while (myNode && myNode.getNext() != null) {
                myNode.myToString();
                myNode = myNode.getNext();
            }
            if (myNode) {
                myNode.myToString();
            }	
        }    

  /*************** set to zero all the add symbols in the BoundNodes, return void **********************************************************************/
    setAddToZero(): void {
        let p1: BoundNode | null = this.getHead();  // p1 is BoundNode
        while (p1 != null) {
        p1.setAd(0);
        p1 = p1.getNext();
        }
    }
  
    copyList(): BoundList | null {
        const myNode = this.getHead();

        if (myNode == null) {
            return null;
        }

        const newBoundNodeHead = myNode.copyBoundNode();
        let newBoundNode = newBoundNodeHead;
        let tempBoundNode = newBoundNodeHead;
        let currentMyNode = myNode.getNext();

        while (currentMyNode != null && tempBoundNode != null) {
            const copiedNode = currentMyNode.copyBoundNode();
            tempBoundNode.setNext(copiedNode);
            tempBoundNode = copiedNode;
            currentMyNode = currentMyNode.getNext();
        }

        return new BoundList(newBoundNodeHead);
    }
    
}


export { BoundList };