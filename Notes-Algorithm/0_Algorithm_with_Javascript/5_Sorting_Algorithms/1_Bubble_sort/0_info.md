# Bubble sort

## How bubble sort works ?

1. Compare adjacent elements in the array and swap the positions if they are not in the intended order
2. Repeat the instruction as you step through each element in the array
3. Once you step through the whole array with no swaps, the array is sorted

```js
[-6 20 8-2 4 ]
[-6 20 8-2 4] -> [ -6 8 20 - 2 4 ] Swap since 20 > 8
[-6 8 20 - 2 4 ] -> [ -6 8 - 2 20 4 ] Swap since 20 > - 2
[-6 8-2 20 4] - [ -6 8 - 2 4 20 ] Swap since 20 > 4
End of array. Elements swapped? Yes? Repeat the comparison.
[-6 8 -2 4 20]
[-6 8 -2 4 20 ] - [ -6 - 2 8 4 20 ] Swap since 8 > -2
[-6-2 8 4 20] - [ -6 -2 4 8 20 ] Swap since 8 > 4
[-6-2 4 8 20 ]
End of array. Elements swapped? Yes? Repeat the comparison.
[-6 -2 48 20][ -6 -2 4 8 20] [-6 -2 4 8 20] [ -6 -2 4 8 20]
End of array. Elements swapped? No? Array is sorted.

```

## Question :

Problem - Given an array of integers, sort the array.
const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]
