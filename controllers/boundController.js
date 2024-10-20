const {Algoquest}  = require('../services/Algoquest')
const  {Bound} = require ('../services/Bound')
const {BoundNode} = require ('../services/BoundNode')

class BoundController{

  constructor(){
    this.Algoquest = new Algoquest()  
  }

   run(req, res){
    console.log('Algoquest ALGORITHEM HAS STARTED!', req.body);
    const boundspre = req.body.bounds
    const mainBound = req.body.mainBound
    console.log('the bounds:', boundspre);
    
    const bounds = boundspre.map((bound)=>{
      return  new Bound( parseInt(bound.left), parseInt(bound.right), parseInt(bound.up), parseInt(bound.down))
    })
    console.log('bounds after map:',bounds);
    
    const list =   this.Algoquest.findMax(mainBound.left, mainBound.right, mainBound.up, mainBound.down, bounds)  
    let myNode = list.getHead();  // myNode is  BoundNode
    while ((myNode !=undefined)&&(myNode.getNext() != null) ) {
     // console.log('boundNode in list answer : ', myNode.myToString() )    
      myNode = myNode.getNext();
    }
  
    
    const ans =  this.Algoquest.findTheMaxBound(list);
    console.log('The Algorhitm\'s answer ========>:',ans);
    console.log('bounds after map:',bounds);
    const boundAns = {left: ans.getLeft(), right: ans.getRight(),up:  ans.getTop(),down: ans.getBottom()}
    console.log('boundAns:',boundAns);
    
    res.send(boundAns)
  }
}

module.exports={
  boundController: new BoundController()
}