const prompt = require("prompt-sync")();

//This defines a class LRU which represents a Least Recently Used Cache.
class LRU {

    //The constructor method sets the maximum capacity of the cache and initializes an empty JavaScript Map object to store the cache entries.
    
    constructor(capacity){
        this.capacity = capacity
        this.cache = new Map()

    }
    
    //This method getItem takes a key as an argument and returns the corresponding value from the cache if it exists.
     //If the value exists, it is moved to the end of the cache because it is the most recently used.
     //This ensures that the least recently used items are removed from the cache when it reaches its maximum capacity.
    
     getItem(key) {
        const item = this.cache.get(key)
        
        if(item) {
            this.cache.delete(key)
            this.cache.set(key,item)
        }

        return item
    }

    //This method putItem takes a key and a value as arguments and adds them to the cache.
    //If the key already exists in the cache, it is deleted and the new value is added.
    //If the cache is at its maximum capacity, the least recently used item (the oldest item) is deleted before the new item is added.

    putItem(key,value) {
        if(this.cache.has(key)){
            this.cache.delete(key)
        }else if(this.cache.size == this.capacity){
            this.cache.delete(this.oldestItem)
        }
        this.cache.set(key,value)
    }

    //This is a getter method that returns the key of the oldest item in the cache.
    //It does this by using the keys method of the Map object to get an iterator over the keys of the cache,
    //then using the next method to get the first key, which is the oldest key.
    
    get oldestItem(){
        this.cache.keys().next().value
    }

}

const cache = new LRU(5)
cache.putItem('a',1)
cache.getItem('a')