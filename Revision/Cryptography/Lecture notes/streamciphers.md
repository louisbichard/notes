

#Defintions:

__Computational security__: It is unfeasible (too time or resource consuming) to break the cipher. Depends on the currently available algorithms and computational power.

__Unconditional security__: Impossible (with unlimited time and resources) to break the cipher. This does exist, but it is expensive. 

__Provable security__: We can prove that a known NP-complete problem reduces breaking the cipher

__Perfect secrecy__: The ciphertext gives out no information about the plaintext; guessing the plaintext has the same chances of success after having seen the cipher text as it had before seeing it. I.e seeing the cipher text really makes no difference. 

#Block ciphers
* The plaintext is split into blocks of certain length, each encrypted using the same key

#Stream cipher
* Works on bit streams, encrypts bits individually, as they come. 

#One time pad
* A stream cipher
* Achieves perfect secrecy
* Keystream is truly random
* Given any ciphertext, all plaintexts are equally likely to have caused it
* Unconditionally secure
* Is very expensive as the keystream is the same length of the message itself
* Used in military contexts
* Derived from vernam algorithm, which was reusing a key (however if the key was created random, it was impossible to break)
* Called pad as it was originally written on really small pads of paper, where the keys could be torn off and destroyed

#Pseudo-ranondomness
* If we cannot afford true randomness, we use pseudo randomness
* Generate a sequence of integers