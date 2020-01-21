function swap(array, i, j) {
    const tmp = array[i];       
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};



function mergeSort(array) {
 if (array.length <= 1) {
     return array;
 }

 const middle = Math.floor(array.length / 2);

 let left = array.slice(0, middle); 
 let right = array.slice(middle, array.length); 


 left = mergeSort(left);
 right = mergeSort(right);
 console.log('array',array,left,right)
 return merge(left, right, array);
};


function merge(left, right, array) {
 let leftIndex = 0;
 let rightIndex = 0;
 let outputIndex = 0;
 //console.log(left,right)
 while (leftIndex < left.length && rightIndex < right.length) {

     if (left[leftIndex] < right[rightIndex]) {
     // console.log(array)
         array[outputIndex++] = left[leftIndex++]; // left[0] 1 
        // console.log('hree',array) // does this still mean 0 but then immediately ++
     }
     else {
        // console.log('happens once for 2, 1',array)
         array[outputIndex++] = right[rightIndex++];
        // console.log(array)
     }
 }

 for (let i = leftIndex; i < left.length; i++) {
    // console.log(i)
  //console.log(array[outputIndex++],left[i],'If left is greater than right, position swapped')
     array[outputIndex++] = left[i];
 }

 for (let i = rightIndex; i < right.length; i++) {
     array[outputIndex++] = right[i];
 }
 //console.log(array)
 return array;
};
let array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
//console.log(mergeSort(array))

// 2 L 1 R  --> 1,2 
// [1,2] L [5,6] --> 
function partition(array, start, end) {
    swap(array, end-1,start)
    console.log(array[end -1])
    const pivot = array[end - 1]
    let j = start ;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array,end -1,j);
    return j;
};
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    console.log(array)
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    
    return array;
};

//quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12])

// 1. Merge Sort 
// a. [21,1,26,45],[29,28,2,9],[16,49,39,27,43,34,46,40] -- are the splits after 3 calls 
// merge function needs more recursive calls to receive a value
// b. [21][1][26][45],[29][28][2][9],[16,49,39,27],[43,34,46,40] 
// c. [1,21] & [26,45] 
// d. [1,21,26,45] & [2,9,28,29] --> [1,2,9,21,26,28,29,45]

// 2. Quick Sort 
// 1) Either 14 or 17
// 2) 12 pivot: [ 10, 3, 9, 12, 19, 14, 17, 16, 13, 15 ], 14 pivot: [ 12, 13, 10, 3, 9, 14, 15, 16, 19, 17 ]


// 3. Our own Quick Sort 
function part(array,start,end){
    const pivot = array[end - 1]
    let j = start ;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array,end -1,j);
    return j;
}
function qSort(array, start = 0,end = array.length){
    if (start >= end){
        return array;
    }
    const middle = part(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    
    return array;
}
let dataset = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
let newdata = dataset.split(' ').map(function(item){
return parseInt(item,10)
})

//console.log(qSort(newdata))

//4. Msort 
function merge2(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
   
        if (left[leftIndex] < right[rightIndex]) {
 
            array[outputIndex++] = left[leftIndex++]; 
        
        }
        else {
        
            array[outputIndex++] = right[rightIndex++];

        }
    }
   
for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }
   
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
  
    return array;
   };

   function mSort(array) {
    if (array.length <= 1) {
        return array;
    }
   
    const middle = Math.floor(array.length / 2);
   
    let left = array.slice(0, middle); 
    let right = array.slice(middle, array.length); 
   
   
    left = mSort(left);
    right = mSort(right);
    return merge2(left, right, array);
   };

   //console.log(mSort(newdata))

   //5. Sort with Linked List 
   class LinkedList {
    constructor(){
     this.head = null;
    }
   
    insertBefore(node,item){
     
     let nodeAfter = this.find(node) //Boomer
     let currNode = this.head; // Apollo
     
      while(currNode){ // ApolloNode.next == Boomer
        
      if(currNode.next == nodeAfter){ // if Apollo.next == Boomer - Yes
       currNode.next = new _Node(item,nodeAfter) // Apollo.next = newNode 
       currNode = currNode.next
       }
       currNode = currNode.next // node 1,2,3,4,5
     }
     
    }
    insertAfter(node,item){
     let nodeBefore = this.find(node) 
     
     nodeBefore.next = new _Node(item,nodeBefore.next)
    
     let currNode = this.find(item) // hotdog.key // pizza
     let nodeAfter = this.find(item).next // husker.key  // hotdog
     while(currNode.key < nodeAfter){
      currNode = currNode.next
      }
   
    
    
   
   
    }
    insertAt(position,item){
     let currNode = this.head 
     let count = 0
     while (currNode){
       count ++ 
      currNode = currNode.next
     
     if (count == position - 1){
      currNode.next = new _Node(item,currNode.next)
      currNode = currNode.next
     }
    }
   
   }
   
   
   
    insertFirst(item){
     this.head = new _Node(item,this.head);
    }
    insertLast(item,key){
     if(this.head === null){
      this.insertFirst(item,key);
     } else {
      let tempNode = this.head;
      while(tempNode.next !== null){
       tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item,null,key)
     }
    }
    find(item){
     let currNode = this.head;
     if(!this.head){
      return null;
     }
     while(currNode.value !== item){
      if(currNode.next === null){
       return null;
      }
      else {
       currNode = currNode.next;
      }
     }
     return currNode;
    }
    remove(item){
     if(!this.head){
      return null;
     }
     if (this.head.value === item){
      this.head = this.head.next;
      return
     }
     let currNode = this.head;
     let previousNode = this.head;
     while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode;
      currNode = currNode.next;
     }
     if(currNode === null){
      console.log('Item not found')
      return;
     }
     previousNode.next = currNode.next;
    }
   }
   
   class _Node  {
    constructor(value,next){
     this.value = value;
     this.next = next;
    }
   }
   
   let List = new LinkedList
   List.insertFirst(1)
   List.insertFirst(5)
   List.insertLast(2)
   List.insertLast(4)
   List.insertLast(3)
   List.insertLast(6)
  List.insertLast(7)
  List.insertLast(8)
  List.insertLast(9)
  List.insertLast(10)
   //console.log(LinkedList)

   function linkedListMSort(head){
      
    if (head === null || head.next === null){
        return head
    }
    let prev = null;
    let slow = head; //1
    let fast = head; // 1
    while (fast !== null && fast.next !== null){
        fast = fast.next.next; 
        prev = slow; 
        slow = slow.next; 
        
    }
    
    //console.log(slow) // slow = half point in a list 
    prev.next = null // splits the list in half
    const l1 = linkedListMSort(head) // l1 = linkedListMSort(head which has been altered)
    const l2 = linkedListMSort(slow)
    
   return mergeLinkedLists(l1,l2)

   }
   function mergeLinkedLists (l1,l2){
    const head = new LinkedList // new empty list 
 
    let current = head
    while (l1 !== null && l2 !== null){ 
        if(l1.value < l2.value){ 
            current.next = l1  
            l1 = l1.next  
        } else {
            current.next = l2 
            l2 = l2.next 
        }
        current = current.next 
    }
    current.next = (l1 === null) ? l2 : l1 
    return head.next // returning ordered list 
   }
   

  // console.log(linkedListMSort(List.head))

   // 6. Sort an array of integers
   function insertionSort(array) { //[1,5,3,2]
    var length = array.length; // 4
    
    for(var i = 1; i < length; i++) { // 1, i < 4; i++  123
      var temp = array[i];  // array[1,2,3] - 5,3,2 == now its 3 (i = 2)
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) { // keep running if j is higher than 0 and if array[j] > temp which is 5,3,2
        console.log(j) //1,2,1 
        array[j+1] = array[j];  // 2-1 1= array[2] = array[1] swapped 3,5
      
      }
      array[j+1] = temp; // array[1] = temp = 5 (left in place?)
    }
    
    return array;
  }
  function bucketSort(array, bucketSize) {
    if (array.length === 0) {
      return array;
    }
    
    // Declaring vars
    var i,
        minValue = array[0], 
        maxValue = array[0],  
        bucketSize = bucketSize || 5;
    
    // Setting min and max values
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })
 
    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;


    var allBuckets = new Array(bucketCount);
    // new Array(1)

    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }

    // Pushing values to buckets
    array.forEach(function (currentVal) {
      
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });
  
  
    // Sorting buckets
    array.length = 0;
 // array reset 
    
 // [[1,5,3,2]] --> for each bucket(1) insertionSort(bucket)
    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });
  
    return array;
  }


let arra = [1,5,5,5,3,2,12,4,7]
//console.log(bucketSort(arra))
//console.log(sortArray(arra))

// SIMPLE BUCKET SORT 

function linearSort(array,max){
    let bucket = new Array(max)
    array.forEach(function(element){
        bucket[element] = element
    })
    return bucket
}
//console.log(linearSort(arra,12))

// DUPLICATE RESOLVED BUCKET SORT LINEAR 
function sortArray(array){

    // To find Max value
    let minValue = array[0]
    let maxValue = array[0]
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })
    // else could have as parameter 

   let bucket = new Array(maxValue)
   let counters = new Array(maxValue)
   let result = []
// Duplicate problem 
   for (i = 0; i < counters.length; i++) {
    counters[i] = [0];
  }
  
    array.forEach(function(element)  {
       bucket[element] = element
       counters[element] ++ 
       
    })
// return bucket here for O(n) time ---> new Array with 12 slots sorted 
// To solve duplicate problem 
    let items = bucket.forEach(function (item){
          
        if (counters[item] === 1){
            result.push(item)
        } else if (counters[item] > 1){
            for (let i = 0; i<counters[item];i++){
                result.push(item)
            }
        }
    

    })


     result.push(maxValue)

    return result
    
   }

//console.log(sortArray(arra))


// 7. Sort in Place 
function shuffleArray(array){
  
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        
        let t = array[i]; 
        array[i] = array[j]; 
        array[j] = t
        
      }
      return array
}
//console.log(shuffleArray(arra))


// 8. Sort Alphabetical books 
function sortBooks(books){
    if (books.length <= 1) {
        return books;
    }
   
    const middle = Math.floor(books.length / 2);
   
    let left = books.slice(0, middle); 
    let right = books.slice(middle, books.length); 
   
   
    left = sortBooks(left);
    right = sortBooks(right);
    //console.log(left,right)
    return mergeBooks(left, right, books);
}
function mergeBooks (left,right,books){
    let leftIndex = 0;
 let rightIndex = 0;
 let outputIndex = 0;
 //console.log(left,right)
 while (leftIndex < left.length && rightIndex < right.length) {

     if (left[leftIndex] < right[rightIndex]) {
      
         books[outputIndex++] = left[leftIndex++]; // left[0] 1 
       
     }
     else {
        // console.log('happens once for 2, 1',array)
         books[outputIndex++] = right[rightIndex++];
        // console.log(array)
     }
 }

 for (let i = leftIndex; i < left.length; i++) {
    // console.log(i)
  //console.log(array[outputIndex++],left[i],'If left is greater than right, position swapped')
     books[outputIndex++] = left[i];
 }

 for (let i = rightIndex; i < right.length; i++) {
     books[outputIndex++] = right[i];
 }
 
 return books;
}
let books = ['Art','Bingo','Brief Lessons in Physics','JS - Introduction','Ants','Aquarium -types','Aqua']
console.log(sortBooks(books))


function liste(books){
  return  books[0] < books[1]
}
console.log(liste(books))