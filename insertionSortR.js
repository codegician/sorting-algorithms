function insertion(x){
  var value;
  for(i=1;i<x.length;i++){
    value=x[i];
     for(j=j-1; j > -1 && (x[j] > value); j--)
     x[j+1] = x[j];
  }
    x[j+1] = value;
 }
return x;
}
