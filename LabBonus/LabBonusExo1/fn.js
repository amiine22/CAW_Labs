function fn(a,b,...args) {
 //...
 }

 fn(1,2,3,'A','B','C');
 fn(1,2) ;
 let x= [a,b,c,d] ; fn(...x) ;



// (a): args = [3, 'A', 'B', 'C']
// (b): args = []
// (c): args = ['c', 'd']
