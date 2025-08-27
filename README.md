## Arrays and Hashing

### Valid Anagrams - LC49

The trick is to first

- sort each word alphabetically
- After sorting the characters, we should check in the dictionary
  - if it exists, insert into the same array
  - if it does not exist, create a new key, inside the sorted word as first element in the array.
