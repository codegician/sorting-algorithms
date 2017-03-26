function recurvsiveBinarySearch(y,x) {
	var i = 0;

	      if( i <= y.length &&  x === y[i]){
         	 recurvsiveBinarySearch(i++);
	      return console.log(y[i]); //tconsole.log to be replaced with true
	      } else{

	      	return false;
}
}

num = 7;
arr = [9,6,2,7];
recurvsiveBinarySearch(arr,num);



// function recurvsiveBinarySearch(y,x) {
// 	var i = y.length-1;
//
// 	      if(  x != y[i]){
//          	   recurvsiveBinarySearch(i--);
// 	      return true && console.log(y[i]);
// 	      } else{
//
// 	      	return false;
// }
// }
//
// num = 8;
// arr = [9,6,2,7];
// recurvsiveBinarySearch(arr,num);
