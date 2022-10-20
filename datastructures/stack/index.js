/* Stacks 
last in first out

    functions ==> push, pop, peek, length 
    can use an array also 

*/

// palindrome //using arrays

var letters=[]
var word="bob"
var rWord=[]

for(let i=0;i<word.length;i++){
    letters.push(word[i])    
}

for(let i=0;i<word.length;i++){
    rWord+=letters.pop()
}

if(rWord==word){
    // console.log(word,"is palindrome")
}
else{
    // console.log(word,'not palindrome')
}


//Creating stack

var Stack=function(){
    this.count=0
    this.storage={}//empty object

    //add value to the end of the stack
    this.push=function(value){
        this.storage[this.count]=value
        this.count++
    }

    //remove and retuns the value at the end of the stack
    this.pop=function(){
        if(this.count===0){
            return undefined
        }
        this.count--
        var result=this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size=function(){
        return this.count
    }

    //returns the value at the end of the stack
    this.peek=function(){
        return this.storage[this.count-1]
    }
}

var myStack=new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())