

# Discuss how much plaintext (and the corresponding ciphertext) does Eve need to know in a known plaintext attack in order to determine the key (or narrow down to very few keys) for each of the following cryptosystems:

Shift (Caesar) cipher
Substitution cipher
Vigenère cipher
Permutation cipher
A stream cipher in which the keystream is periodic with period L (i.e. the bits get repeated after L values).

Compute the inverse of the following permutation:       

# Assume you are using a stream cipher where the keystream is generated using the Blum Blum Schub pseudorandom number generator with the parameters p = 11,  q= 19. Encrypt the message 11010111, assuming the seed is , s0 =25. (Recall that the Blum Blum Shub pseudorandom number generator will generate the sequence of numbers     s1 s2 s3 … based on the recurrence relation si = (si-1)2 mod n  with n=pq. A binary sequence for the keystream is obtained by taking the least significant bits: s1 mod 2, s2 mod 2, s3 mod 2, …)

# (Problem 2.19 in W. Stallings, Cryptography and Network security) This problem explores the use of a one-time pad version of the Vigenère cipher. In this scheme, the key is a stream of random numbers between 0 and 25. For example, if the key is 3 19 5 …, then the first letter of plaintext is encrypted with a shift of 3 letters, the second with a shift of 19 letters, the third with a shift of 5 letters, and so on. 

## Encrypt the plaintext sendmoremoney with the key stream 9 0 1 7 23 15 21 14 11 11 2 8 9.

## Using the ciphertext produced in part a, find a key so that the ciphertext decrypts to the plaintext cashnotneeded. 

## Explain how the computations above illustrate the perfect secrecy and unconditional security of the one-time pad.
