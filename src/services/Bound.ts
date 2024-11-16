


class Bound {
    //  Constructor for objects of class Bound (double,double,double,double)
    L: number;
    R: number;
    T: number;
    B: number;
    constructor(left: number, right: number, top: number, bottom: number){
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
    getSize(): number {
        return (this.T - this.B)*(this.R - this.L);   
    }
    
    // return Double
    getTop(): number {
        return this.T;
    }
    //return double
    getBottom(): number {
        return this.B;
    }
    
   // return double
    getLeft(): number {
        return this.L;
    }
    // return double
    getRight(): number {
        return this.R;
    } 
    //  void (double)
    setTop(t: number): void {
        this.T=t;
    }
    //  void (double)
    setBottom(b: number): void {
        this.B=b;
    }
    //  void (double)
    setLeft(l: number): void {
        this.L=l;
    }
    //void(double)
    setRight(r: number): void {
        this.R=r;
    }
    copyBound():  Bound {
        return new Bound(this.L, this.R, this.T, this.B);
    }
    // return string
    myToString(): void {
        let  L=this.L;
        let  R=this.R;
        let  T=this.T;
        let  B=this.B;
        console.log( ` L : ${L}    R : ${R}   T :${T} B :${B}`) ;   	
    }     
}


export { Bound };