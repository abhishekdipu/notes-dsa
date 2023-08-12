# Sliding Window

- In many problems involving an array or linked list, we are asked to calculate something among subarrays of a given size.
- Often these subarrays overlap, which allows us to optimize our algorithm and not recompute the overlapping sections.
- We can use a sliding window to discern what might be overlapping between subarrays vs what is a new element to be computed.

## How to identify if given problem can be solved using Sliding Window ?

- there would array or linked list and will be asked to do something in **contiguous** (i.e continues) sub array.

## Some popular problems are :

- Given an array, find the average of all contiguous subarrays of size "K"
- i/p : [1, 2, 3, 4, 5], K = 3
- o/p : [2, 3, 4]
  explanation : average of (1+2+3)/3 = 2; average of (2+ 3+ 4)/3: 3; average of (3+ 4+ 5)/3 = 4
