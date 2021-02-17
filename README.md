# iovLabs

Given a chain (i.e. a set of blocks each one chained to the next block), determine if a cycle is formed at any given part of the chain. Each block contains a unique id and a reference to the next block.

```` 
Block { 
    id: int 
    next: Block 
}

boolean hasCycles(Block firstBlock); 
````

### 1) Write an algorithm that determines whether or not a given chain has any cycles. You can use whatever language of your choice. 

```` yarn test ```` to run the test for hasCycles

### 2) Explain the complexity of your algorithm (Big O notation) 

The complexity is O(n^2) since it has to go through blockSet

### 3) Explain any assumption made (if necessary)

The assumption is that we need to go through all block set with 2 different pointers to check if it has cycle, in the first phase if the block has no next it is already the tip.
