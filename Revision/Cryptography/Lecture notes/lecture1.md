#Overview

##Cryptography vs Cryptanalysis

__Cryptography__: Secret communication i.e transforming a message in such a way that only the intended recipient can understand it. It should be unfeasible (too expensive or time consuming) for an eavesdropper to recover the original message. 

__Cryptanalysis__: "Code breaking" - recovering messages without the priviledged information (i.e the key). 

__Cryptology__: Cryptography + Cryptanalysis

##Types of attacks

* Passive
	* Eavesdropping
	* Traffic analysis
* Active attacks
	* Tampering with the messages
	* Replay
	* Impersonation
	* Impersonating the sender and reciever (man in the middle)

// TODO: DEFINE REPLAY

##Uses of cryptography

* __Confidentiality__: Messages can only be read by the intended recipient
* __Authentication__: Guarentee's the identity of the parties
* __Integrity__: Unauthorised changes to messages would be detected
* __Non-repudiation__: A party cannot deny that a message was sent of recieved by them

##Principles of cryptographic algorithms

Most algorithms today follow these basic principles: 

* Not recommended to keep the algorithm secret
* Decryption key must be kept secret
* Algorithms are publically known
	* Genuinely strong cryptography shouldn't need to do this

##Types of cryptography

###Symmetric cryptography
* The conventional method of encryption
* A secure channel is required for key distribution

###Public key cryptography
* Encryption and decryption use different keys
* Keys are related but it's hard to deduce one from the other

##Symmetric vs Public key

###Speed
Symmetric cryptography is much faster than public key for a similar level of security

###Security
For same computational cost, symmetric is more secure

###Complexity of implementation
Symmetric requires a secure channel for passing of its keys which can be expensive

##Combining symmetric and public key cryptography
* Use public key cryptography to exchange a message with a symmetric key
* Communicate using symmetric cryptography
* Used in SSL ang PGP

