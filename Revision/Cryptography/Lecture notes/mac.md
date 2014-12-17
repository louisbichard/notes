#Authentication

__Prevent impersonation__: Messages being created that are claiming to be from someone other than the original sender

__Content modification__: Modifying content of a legitimate message

__Timing modification__: Delay or replay of legitimate messages

Definition: 

"Given a message, authentication has to guarentee that the message originates from the purported sender, is unmodified and was issued at the purported time"

##How they do it

###Using public keys:
* Digital signatures

###Using a secret key:
* Shared by the two parties in communication (authentication between the two parties)
* MAC code can be based on: 
	* symmetric cryptosystems
	* Hash functions
* Encrypt the message using a symmetric cryptosystem
* In CBC or CFB mode using the shared secret key
* The last block of text is used as the MAC
* Standards

#MAC

##Definition

A piece of information that is computed from the message (using the secret key) and transmitted along with the message. The MAC should provide authentication of the message, i.e if the message was subject to an attack. The MAC has a high probability to not fit the message if it is attacked. The mac can be checked by another party who has the key. 

#Mac using hash functions
* Concatenate the secret key and the message and apply a hash function
* The result is the MAC
* E.g. HMAC
	* Is a scheme based on a hash function and a shared secret key

##Security of a MAC algorithm
* Should be unfeasible to produce a message with a valid MAC without the knowledge of the secret key

##Authentication at a point in time
* Timestamping
	* The time or date is included in the message before the whole is authenticated (e.g PGP signatures include time)
* Challenge/ Response
	* When establishing a two way connection e.g. SSL each party sends the other a random number (nonce) which the other party should send back in an authenticated way which prevents replay
* A trusted third party could timestamp the message
