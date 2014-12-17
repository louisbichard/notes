#Symmetric cryptography

* Considered outdated
* Many ideas are used as components of modern ciphers
* Many of the attacks are similar to modern ciphers too

##Components of a cryptosystem

* Possible plaintexts
* Possible ciphertexts
* Possible keys
* Encryption functions
* Decryption functions

##Shift cipher
* Caeser cipher
* Shift to the right by X places

##Substitution cipher
* Uses a substitution table to swap letters in the alphabet for others
* Could be any other letter

##Vigenére cipher
* Text is split into blocks
* Each item in the block has a shift value
* They are then shifted by this value

##Permutation cipher
* Split into blocks of M
* Jumble the letters in that block according to the key

##Types of attack:

__Ciphertext only__: Eve only has ciphertexts

__Known plaintext__: Eve has at least one plaintext and the corresponding cipher text

__Chosen plaintext__: Eve obtained access and has encrypted at least one plaintext of her choice

__Chosen ciphertext__: Eve obtained temp access to decryption machinery and can decrypt one ciphertext of her choice