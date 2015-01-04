

# Discuss how much plaintext (and the corresponding ciphertext) does Eve need to know in a known plaintext attack in order to determine the key (or narrow down to very few keys) for each of the following cryptosystems:

Shift (Caesar) cipher
Substitution cipher
Vigenère cipher
Permutation cipher
A stream cipher in which the keystream is periodic with period L (i.e. the bits get repeated after L values).

Compute the inverse of the following permutation:       

# Assume you are using a stream cipher where the keystream is generated using the Blum Blum Schub pseudorandom number generator with the parameters p = 11,  q= 19. Encrypt the message 11010111, assuming the seed is , s0 =25. (Recall that the Blum Blum Shub pseudorandom number generator will generate the sequence of numbers     s1 s2 s3 … based on the recurrence relation si = (si-1)2 mod n  with n=pq. A binary sequence for the keystream is obtained by taking the least significant bits: s1 mod 2, s2 mod 2, s3 mod 2, …)

## Notes from lecture
Blum-Blum-Shub generator 
one of the most cryptographically secure generators
n = pq     with p, q  two prime numbers such that 
p mod 4 = q mod 4 = 3
Seed s0 should not be divisible by p or by q.
Algorithm:
sn= (sn-1) 2 mod n
(to obtain bits, we keep the least significant bit kn= sn mod 2)

Stream ciphers use purpose-designed generators.