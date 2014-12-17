#Exam notes

* 1.5 hours
* 4 questions
* Calculators are allowed
* Similar to past years
* Some marks awarded for additional revision
* No questions regarding port sniffers and scanners in this year

# Past paper - 2009

### Bob is setting up his keys for RSA cryptosystem. He has computed his keys as (e = 21, n = 187) for the public key and (d = 62, p = 11, q = 17) for the private key. Is this a correct key pair? Justify your answer. You can use any method you want for checking whether the keys are correct. If they are not, you do not need to produce alternative correct keys. (7 marks)

###Bob is using the RSA public key (e = 21, n = 187) and the correct corresponding private key for singing. Alice receives an unecrypted document M with a digital signature having the value 5. Alice is told that the message is signed by Bob. Explain how Alice will verify the signature, knowing that when applying the hash function to M, the hash code obtained is 82. For full marks use the square and multiply method where appropriate. (7 marks)

# Past paper - 2010

###Alice and Bob use RSA public-key cryptography. For his private key Bob chooses the prime numbers p = 11 and q = 17. For his public key he chooses the exponent e = 23. Compute Bob's private key and public key using either the extended Euclidean algorithm (for full marks) or any other method (for partial marks). 

###Using this setup, Alice wants to send Bob the message 3. How will she encrypt it? Use the square and multiply method (for full marks) or any other method for partial marks. 

# Past paper - 2011 

###Alice and Bob use RSA public key cryptography. Bob chooses the prime numbers p=7 and q = 11. For his public encryption exponent Bob wants to chose either e=3 or e=7 or e=13 or e=14. At least one of these values if a valid choice but some might not be valid choices. For each choice explain why it is valid or not. Pick a valid choice and compute Bob's private key and public key using either the extended Euclidean algorithm (for full marks) or any other method (for partial marks). 

# Past paper - 2012

###The following questions refer to advanced encryption standard 

####Describe the main steps of the encryption algorithm for block size 128 bits and key size 128 bits (don't describe the decryption or creation of round keys)

####In the design of the algorithm do you think it was necessary that all entries in the Sbox (Substitution table) should be different? Justify your answer. 

####What encryption standard was used before AES and why did it need to be changed? 

###Bob wants to create keys for using RSA public-key cryptography. He choosed the prime numbers p = 101 and q = 103. For his public encryption exponent Bob chooses e = 77. Compute Bob's private key and public key using either the extended Euclidean algorithm (for full marks) or any other method for parial marks. 

# Past paper - 2013

###Alice and bob use public key cryptography. Bob publishes his public key as (e = 33, n = 3127). Alice wants to send him the message m = 10. How will she encrypt it? Use the square and multiply method for full marks, or any other method for partial marks. Eve has bob's public key and she suspects that Bobs private decryption exponent is d = 8. Do you think she is right? Justify your answer. (If you think she is incorrect, you must determine the correct exponent).

#Symmetric vs public key cryptography

###Compare the two different types of cryptography, discussing their advantages and disadvantages. 

__Symmetric__ encryption is where both sender and reciever have access to a decryption key. Because of this, a secure channel must be available in order for the communication of the key between those wishing to decrypt. 

__Public key cryptography__: Refers to when the reciever of the message has a private key to which he can decrypt messages. They then make the encryption key public so that anyone has access to the key. 

* Symmetric encryption is considerably quicker than public key encryption for the same level of security
* For the same level of computational cost, symmetric is more secure
* Symmetric key requires a secure channel for communicating the key which can be expensive therefore making public key cryptography more accessible. 

###For each of the following algorithms, specify whether they are symmetric, public-key:

####Substitution cipher

__Symmetric__ is done through shifting of letters according to a block table

####One-time pad

__Symmetric__ the key is secret and found on a pad

// TODO: DOUBLE CHECK THIS

####AES

__Symmetric__

####DES

__Symmetric__

####RSA

__Public Key__

###Give an example of both types of cryptography (symm and public key). 

__Symmetric__: Caesar cipher
__Public key__: RSA

###Describe how the two types of cryptography can be combined and describe the advantages of doing so. 

As symmetric key encryption is much faster, this can be used as the main communication channel, however it's difficult to share the key without a secure channel. By sending the symmetric key encrypted using public key cryptography the symmetric key can be communicated securely. 

#Stream ciphers

###Explain how the one-time pad cryptographic system works and discuss its security

One time pad is a __stream cipher__ that achieves __perfect secrecy__. The keystream is truly random, meaning that given any ciphertext, all plaintexts will have been equally likely to have generated it. One-time pad as a result is very expensive as the keystream is the same length of the message itself. Due to its strength as a cryptosystem it is used in military and diplomatic contexts where security is paramount. 

// TODO: DO SOME RESEARCH ON THIS TO 'PAD IT OUT' (GET IT! ... OH MAN, I'M LOSING IT)

#Symmetric key cryptosystems

###What is the purpose of message authentication? Explain the method for producing a message authentication code (MAC) using a hash function and a shared secret key. Where is a MAC used in Secure Socket Layer (SSL) protocol. 

###Describe the Cipher Block Chaining mode of operation for AES including the encryption as well as decryption process. (The explanation can either be text or a diagram).

* The first block is XOR-ed with an initialisation vector and then encrypted
* The vector can be made public or kept secret ... it's usually random and changed on each use of CBC

// TODO: SUBMIT THIS ONE TO MEMORY

### Explain how a message authentication code (MAC) can be created using AES in CBC mode. Why is this mode suitable for creating a MAC?

###In AES encryption algorithm there are several rounds, eaching containing the operations Add Round Key, Substitute Bytes, Shift Rows, Mix Columns. Discuss how will the algorithm be affected in the following separate scenarios:

// TODO: IN ORDER TO ANSWER THESE, WATCH A YOUTUBE VIDEO

####The add round key operation is not performed at all in any round

####In each round, in the Add Round Key, instead of computing a bitwise XOR between the state and the key, we use a bitwise OR (6 marks).

###Describe the main steps of the encryption and decryption algorithms in the Advanced Encryption Standard (AES). What encryption standard was used before AES and why did it need to be replaced?

The main steps of encryption involved in AES are: __Byte substitution__, __ShiftRow__, __MixColumn__, __AddRounKey__. 

For encryption of a block of 128 bits, this would last for 10 rounds. 

* __Byte sub__ ( An SBOX ) is applied to each byte
* __ShiftRow__: Each row is cyclically shifted left by the offsets 0, 1, 2, 3 bytes
* __MixColumn__: Each column of bytes is transformed by a finite field operation ( can be viewed as a substitution acting on each column )
* __AddRoundKey__: The round key, written column wise is XOR'ed to the current block

Before AES was DES. Whilst DES was very fast, advances in computational power made it vulnerable to exhaustive key search. 

####In the design of 128 bit AES do you think that it was necessary that all entries in the Sbox (substitution table) should be different? Justify your answer

#SSL

###What kind of encryption is used in the Secure Socket Layer (SSL) protocol: Where exactly in the protocol is encryption used and why? 

###An attacker Eve could record a genuine Secure Socket Layer session between alice and her bank as it takes place. Eve could then attempt to connect to the bank later and replay the recorded session in the hope of making the bank believe this is a new communication from Alice. How is this prevented in SSL?

###You are about to make an online payment to an e-commerce website ABC.co.uk using secure socket layer (SSL) protocol. This website sends to your browser a digital certificate issued by the certificate authority XYZ. How does your web browser verify that the certificate of the ABC.co.uk is genuine? 

###For SSL, describe where encryption is used in the protocol and what type of encryption it is (symm or pub)

###What security services does SSL offer? What are the protocols included in SSL? What are the main steps of the protocols? 

###Explain how SSL combines the use of public key cryptography and symmetric cryptography. 

###How does SSL achieve each of the following: confidentiality, authentication, integrity, protection against replay?

###How does SSL use digital signatures?

#Public Key Cryptography

###Explain how PGP/GnuPG works for sending an encrypted email. Explain how PGP combines the use of public key cryptography and symmetric cryptography. 

###Name two formats for digital signatures

###Name three pieces of information that you feel are most important in a certificate, regardless of the format (if you can't decide which three are most important, name up to five) and briefly explain why you think they are imporant

###Name the two formats of digital certificates

###What is the prupose of a digital certificate

###What are the roles of a certification authority and a registration authority?

###How does a web browser determine whether a certificate is genuine?

###Explain how digital signatures are produced using a hash function and a public-key cryptosystem. How are digital signatures checked?

To sign a message using hashing and public key cryptography first the message is hashed to produce.

###Explain how digital signatures are verified. 

###It is well known that if an efficient integer factorisation algortithm was found the RSA cryptosystem would be broken. Why?

#Digital signatures

###Assume you have a hash function which produces outputs (hash codes) which are 16 bits long. Discuss the sustainability of this function for the digital signature scheme (public key and hashing). (Taken from 2010 paper if this makes no sense)

###What are digital signatures?

###What is the purpose of a digital signature?

###What are the main formats of a digital signature?

###What information is contained inside of a digital signature (You do not need to know all the items in a certificate, only about 5 items that you think are important). 

###Explain what is meant by collisions for a hash function. 

A collision refers to when multiple inputs to a hash function create the same output. 

// TODO: DOUBLE CHECK THIS

###Explain what is meant by a hash function being one-way.

A hash function is one way if for any given value h it is very hard to find x so that H(x) = h. One way functions cannot be found out in reverse.

// TODO: CLEAN UP THIS ANSWER, IT'S FLAKEY

###Explain the notion of weak collision resistance for a hash function.

Weak collision resistance means that for any given input it is hard (but not impossible) to find another input that has the same hash code

###Explain how an opponent can forge signatures if the hash function is not weak collision resistant

###Explain the notion of strong collision resistance 

Strong collision resistance is where it is hard to find any inputs at all that have the same output from two different inputs

###Name hash functions that are currently recommended (You do not need to know the Merkle-Damgard construction and the sponge construction for hash functions)

SHA-2 and SHA-3 family

// TODO: DOUBLE CHECK IF THERE ARE MORE OF THESE THAT WE CAN USE

###Past paper question (10 marks)

A typical digital signature scheme uses a hash function and a public-key cryptosystem

####Explain how the signature is produced

// TODO: WORK THIS OUT

####Explain how the signature is verified

####How do collisions affect the security of a hash function

####A digital signature contains, amongst other things a digital signature. What is the role of the signature? 

The signature ensures that:

* You can prove the identity of the author and therefore be sure that it wasn't forge
* The signer cannot deny that they signed the message
* Is integral, i.e it is tied to the message, so the message cannot be tampered with, and if it is it would disrupt the message and be obvious that it was forged. 

####Who signs an X509 certificate usually

####Who signs an openPGP certificate usually

####Explain the notion of weak collision resistance for a hash function. Explain why this property is required for hash functions used in digital signatures

####Are there cryptographic hash functions that do not have any collisons? Justify your answer

### Past paper Digital signature questions (10 marks)

####Name the two main formats for digital signatures

####What does a certification authority and registration authority do?

####The SSL (Secure Socket Layer) protocol uses digital certificates. Explain at which point they are used and how the browser checks that the certificate is genuine. 

#General security

###Discuss different types of attacks that occur over the internet in terms of motivation and the goals the attacker tries to achieve. 

###Discuss non technical security attacks and attacks that exploit the human element ("Social engineering")? And provide methods to protect against these attacks

###Discuss some of the potential threats when using executable content on a cient computer. Discuss possible measures to protect against these attacks

###Discuss several methods that can be used by an unauthorised person to obtain the password to a computer system. Discuss measures to take to prevent this from happening

###Discuss denial of service attacks and possible protection measures

###Discuss distributed denial of service attacks and their purpose, methods used for attack and protecting against them (no need to discuss any other type of denial of service attacks).

###Explain the terms: Virus, Worm, Trojan Horse and discuss their corresponding protection measures

###What does the term "authentication" mean in cryptography and why is authentication needed? What is a MAC (Message Authentication Code)? Explain the main idea for producing a MAC using a hash function. (HMAC algorithms)( You do not need to know the exact formula for HMAC ). Explain why this method satisfies the requirements of a MAC. Discuss methods of authenticating the time when a message was sent. 

###Discuss several methods that can be used by an unauthorised person to obtain the password of a computer system. Discuss possible methods to protect against these attacks (10 marks)

###Discuss security and privacy aspects of cookies (5 marks)

###Discuss browser overflows and protection against them (5 marks)

#Network security

###What is phishing and discuss methods of protective against it

###Discuss cookies in terms of security and privacy threats

###What are firewalls? What protection do they offer? Discuss different types of firewalls

###Discuss four different techniques that firewalls can employ for protecting a network

###What is IPSec? What security service does it provide? Describe the AH and ESP version of the protocol. Describe the transport mode and tunnel mode. What are the advantages of using tunnel mode at the router/firewall of an internal network? (Note: you do not need to know the exact structure of the IPSec packets, concentrate on what security mechanisms are used e.g. MAC)

###Discuss the security of the IEEE 802.11 (Wifi protocol)(6 marks)

###Discuss the security related features a customer would expect to see on an e-commerce website (only mention features visible to the customer) (10 marks)

###What would a web browser do with a digital certificate after it finds out that it's genuine. 

###Discuss buffer overflow attacks and possible measures to protect against them. (5 marks)


<!-- 
I AM NOT SO SURE ABOUT THESE QUESTIONS SO I AM LEAVING THEM FOR NOW, COME BACK TO THEM AT THE END IF YOU GET TIME
--> 

###Explain how to use AES (or any other symmetric block cipher) in ECB (Electronic cook book) and CBC (Cipher Block Chaining) mode. 

###For ECB (Electronic cook book):

####Assume in the plaintext there is a block of text that appears several times. Discuss whether this fact will reflect in the ciphertext for this mode

Since the block is encoded independently using the same key it is possible for the plain and cypertext to be repeated so is vulnerable for long messages.

// TODO: READ MORE AROUND THIS, I'M STILL NOT SO SURE

####Discuss whether this mode is suitable for producing a MAC (Message Authentication Code). In the affirmative case explain how is the MAC obtained. 

###For CBC (Cipher Block Chaining):

####Assume in the plaintext there is a block of text that appears several times. Discuss whether this fact will reflect in the ciphertext for this mode

####Discuss whether this mode is suitable for producing a MAC (Message Authentication Code). In the affirmative case explain how is the MAC obtained. 

###For OFB (Ouput feedback):

####Assume in the plaintext there is a block of text that appears several times. Discuss whether this fact will reflect in the ciphertext for this mode

####Discuss whether this mode is suitable for producing a MAC (Message Authentication Code). In the affirmative case explain how is the MAC obtained. 

###For CFB (Cipher Feedback):

####Assume in the plaintext there is a block of text that appears several times. Discuss whether this fact will reflect in the ciphertext for this mode

####Discuss whether this mode is suitable for producing a MAC (Message Authentication Code). In the affirmative case explain how is the MAC obtained. 

###For CTR (Counter:

####Assume in the plaintext there is a block of text that appears several times. Discuss whether this fact will reflect in the ciphertext for this mode

####Discuss whether this mode is suitable for producing a MAC (Message Authentication Code). In the affirmative case explain how is the MAC obtained. 