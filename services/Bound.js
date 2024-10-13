


class Bound {
    //  Constructor for objects of class Bound (double,double,double,double)
    L;
    R;
    T;
    B;
    constructor(left, right, top, bottom){
        this.L = left;
        this.R = right;
        this.T = top;
        this.B = bottom;
       // console.log('Bound was created with:', this.L,this.R,this.T, this.B);
    }

    // Bound(Bound)
    // constructor ( other){
    //     this.T=other.getTop();
    //     this.B=other.getBottom();
    //     this.L=other.getLeft();
    //     this.R=other.getRight();
    // }

    // return double
    getSize(){
        return (this.T - this.B)*(this.R - this.L);   
    }
    
    // return Double
    getTop(){
        return this.T;
    }
    //return double
    getBottom(){
        return this.B;
    }
    
   // return double
    getLeft(){ 
        return this.L;
    }
    // return double
    getRight(){ 
        return this.R;
    } 
    //  void (double)
    setTop(t){
        this.T=t;
    }
    //  void (double)
    setBottom(b){
        this.B=b;
    }
    //  void (double)
    setLeft(l){ 
        this.L=l;
    }
    //void(double)
    setRight(r){ 
        this.R=r;
    }
    copyBound() {
        return new Bound(this.L, this.R, this.T, this.B);
    }
    // return string
    myToString(){
        let  L=this.L;
        let  R=this.R;
        let  T=this.T;
        let  B=this.B;
        console.log( ` L : ${L}    R : ${R}   T :${T} B :${B}`) ;   	
    }     
}


module.exports = {Bound}