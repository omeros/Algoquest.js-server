const {BoundNode} = require('./BoundNode')


class BoundList {
  /*************** Constractor **************/
    head = null ;
    // constractor () {
        
    // }
    /****** constructor(BoundNode )***********************/
    constructor(boundNode) {
    /*********************************************************************/
        this.head = boundNode;
    }
    /******************** return the head - BoundNode *************************************************/
    getHead(){
    /*******************************************************************/
        return this.head;
    }
  /****** combine two lists to one list ****return BoundList(BoundList)****************/
    combine( otherList) {
        if ((otherList != null) ){      
                     //&&(other!=undefined)) {
            let otherNode = otherList.getHead();   // otherNode is BoundNode
            while ( (otherNode != null)) {
              this.addToList(otherNode); // adding the first Node in the other List  to this list
                otherNode = otherNode.getNext();
            }
            //this.addToList(otherNode);
            return this;
        }
        return null;
    }

  /****************** add each node to another in the same list  , return void ***********************/
    refresh(){
        let p1 = this.getHead();  // p1 is BoundNode
        let p2 = this.getHead();  //p2 is BoundNode
        p2.getNext();
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
    addToList( other){ // other = BoundNode
       // if ( (other != null)&&(other != undefined) ) {
      //  if(other){
        //if ( other instanceof BoundNode ) {
        if(other.getAd() == 1){
            return
        }
            let myNode = this.getHead();  // myNode is  BoundNode
            // while ((myNode !=undefined)&&(myNode.getNext() != null) ) {
            while (myNode.getNext() != null ) {
            //  console.log('addToList : ', other.myToString() ) 
                myNode.addNode(other);
                myNode = myNode.getNext();
            }
           // if(myNode !=undefined){
            myNode.addNode(other);
            if (other.getAd() == 0) {
                    let o = other.getBound();  //Bound
                    // other = new Bound(o.getLeft(),o.getRight(),o.getTop(),o.getBottom());  
                    let a = new BoundNode(o);  // a is BoundNode
                    myNode.setNext(a);
                // other.setAd(1);
           //     }
            }
      //  }
    }

  /************* connect this list( last bound) with other list( head bound) return BoundList(BoundList) ********************************************/
    unit( otherList){
        let myNode = this.getHead();   // myNode is BoundNode
        while (myNode.getNext() != null ){
            myNode = myNode.getNext();
        }
        let otherNode = otherList.getHead();   // otherNode is BoundNode
        // p2.setNext(p1); // part of the answers, - short run time
        myNode.setNext(otherNode); // all the answers, - long run time
        return this;
    }
    // return string
    myToString(){
            let myNode = this.getHead();   // myNode is BoundNode
            if(myNode !=undefined){
                while (myNode.getNext() != null ){
                    myNode.myToString()
                    myNode.getNext()
                }
                myNode.myToString()
            }	
        }    

  /*************** set to zero all the add symbols in the BoundNodes, return void **********************************************************************/
    setAddToZero(){
        let p1 = this.getHead();  // p1 is BoundNode
        while (p1 != null) {
        p1.setAd(0);
        p1 = p1.getNext();
        }
    }
    copyList(){
        //let newList = new BoundList()
        let myNode = this.getHead();   // myNode is BoundNode
        let newBoundNodeHead = myNode.copyBoundNode()
        
        let newBoundNode = newBoundNodeHead
        let tempBoundNode = newBoundNodeHead
        if(tempBoundNode){
            while ((myNode != null)&&(tempBoundNode != null) ){
              //  console.log('tempBoundNode1====>:',tempBoundNode);
                tempBoundNode = tempBoundNode.copyBoundNode()
                //console.log('tempBoundNode2====>:',tempBoundNode);
                newBoundNode.setNext(tempBoundNode)
                tempBoundNode = tempBoundNode.getNext()
                myNode = myNode.getNext();
            }
            return  new BoundList(newBoundNodeHead)
        }
        return null
    }
}


module.exports = {BoundList  }