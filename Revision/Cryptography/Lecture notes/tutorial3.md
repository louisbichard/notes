


# In a well-designed cipher, changing some specified bits in the input should have unpredictable results on the output. So for example an encryption function having the property that changing the first bit in the input would always (or almost always) result in changing precisely the third and sixth bit of the output would NOT be a cryptographically secure encryption function. This is one of the requirements in the design of the AES S-box. Examine the S-box from this point of view. Namely, choose an arbitrary byte and find what it would be substituted with in the AES S-box. Change one particular bit of your original byte and see what the S-box would produce this time. Which bits are different compared to the value obtained before? Do the same starting from another input byte and see what happens if you change the same bit in the input. Do the same bits change in the output? Try a few more values, each time checking what happens if you change that same bit position.

# A good cipher has to achieve diffusion, i.e. one bit of the input should affect many bits of the output. Examine AES from this point of view. Assume one byte of one block of plaintext is changed. Follow the byte through the algorithm and see after how many rounds all the bytes of the state have been affected by that change. (For MixColumns, a change in one byte of the input will result in changes in all the bytes in that column in the output.)

# The following cipher is a “toy example” of a symmetric cipher, using ideas from the design of AES. The cipher has block size 16 bits, key size 16 bits and the encryption consists of the following four steps:

## perform an XOR between the block and the key

## perform a substitution on each of the two bytes of the block using the AES S-box. 
## swap the two bytes of the block
## perform another XOR between the block and the key.
Use this cipher in Electronic Codebook (ECB) mode to encrypt the plaintext 1001 1101   0010 1001 1110 1000 0010 1010 with the key 0010 1010 1101 0110. Encrypt the same plaintext in Output Feedback Mode (OFB) mode with the same key and initialisation vector 1001 1001 1101 1111.

# Why do we have a step of XOR with a key at the very beginning and the very end of AES (and same in the toy example in question 2) ?

# For each of the five modes of operation of modern symmetric cryptosystems: 
## a) Discuss whether repeated blocks of plaintext will produce repeated blocks of ciphertext. 
## b) Draw diagrams for the decryption.
## c) If during the transmission one bit of ciphertext has been switched from 0 to 1 (or from 1 to 0) due to noise, discuss how this will affect the correctness of the decryption in each of the modes of operation.