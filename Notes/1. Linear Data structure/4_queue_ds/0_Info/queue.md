# Queues (FIFO):

- In real world we use queue when we required to process the data in order we received them.
  like Printer, OS (to manager processes), WebServers(to manage incoming request) etc.

## Q. What are Queue?

- Queue is DS works on FIFO.

## Operations supported by queues

1. enqueue - O(1)
2. dequeue - O(1)
3. isEmpty - O(1)
4. isFull - O(1)

- N/B : Similar to Stack all operation in Queue run in constant time, i.e it has time complexity of : O(1)

## Implementation

- we can implement queue using array or linkedList or stack
