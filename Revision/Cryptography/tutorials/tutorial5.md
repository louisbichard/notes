
# In the lecture notes, there were three desirable properties of hash functions: a. one-way /preimage resistance b. weak collision resistance/ second preimage resistance c. (strong) collision resistance. Compare the last two properties in the sense of checking whether a function which satisfies one of the properties will automatically satisfy the other.

# Consider a hash function H which takes as input a bitstring m whose length in bits is a multiple of 8 and produces an 8-bit hash code h computed as the bitwise XOR of all the bytes of the message:

## Compute the hash code (message digest) for the message m =01101110 11010010 10010101 0111 1111.

## Discuss whether the hash code is going to change if a few bits of the message are changed randomly.

## Bob wants to send Alice a digitally signed copy of the message m given in point a). He uses RSA and his private key to sign the message digest produced by the hash function. Assume Eve intercepts the signed message. Discuss whether she can forge Bob’s signature on a different message, and if so give an example of such a message.

## Which of the three properties recalled in question 1 are satisfied by this hash function? Justify your answer. If we use the same algorithm but we increase the length of the hash code by using 32-bit words instead of bytes,  would this hash function become more secure?
 