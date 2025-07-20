## Arrays :

- An array is an ordered collection of values
- In memory arrays get stores in sequence

1. Insert / remove at end - 0(1)
2. Insert / remove at beginning - O(n)
3. Access - O(1)
4. Search - O(n)

## NOTE : JavaScript array methods

1. Push / pop - 0(1)
2. Shift / unshift / concat / slice / splice - O(n)
3. forEach / map / filter / reduce - O(n)

### pros:

1. lookup: O(1) => easy to access (by their index)

### cons :

2. insert : O(n) => bcz in most programming language like java, we have allocate the memory while initializing, so to insert new element we have to copy the element into new array with (size+1) so O(n)

3. Delete : O(n) : as worst case we may have to delete 1st element, so we have shift each element forward.

- but in best case case Omega(1), when we have to delete last element
