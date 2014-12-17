#Digital signatures

__Prove identity of the auther__: Authentication of the author of the message and should provide a proof of the identity of the author, protecting against forgery

__Non-repudiation__: The signer cannot deny that they signed the message

__Integrity__: No change can be done to the message without invalidating the signature, therefore they are both tied in some manner

__Timestamped__: The message should be timestamped in some way to prevent replay

// TODO: RESEARCH REPLAY

#Encrypting using public key

##Method
* To sign message m, Bob "decrypts" m with his private key, the result s is his signature
* Bob publishes the message m and the signature s

##Security implications
* Only bob could have produced s as only he knows his private key
* Forging a signature would involve breaking the public key cryptography
* However: This means the signature is as long as the message

#Encrypting using public key cryptography and a hash function
* To sign a message m bob applies a public hash function to his message
* This produces a message digest h of fixed (short) length
* Bob signs the message digest h as before, using his private key
* Bob publishes the message m and associated signature s
* To verify, apply the hash function to the message m to compute a digest (h1)
* Encrypt bobs signature using bobs public key, obtaining a result h2
* if h1 = h2 then it's genuine
* Creates a signature of smaller length
* Additionally vulnerable due to the hash function

#Hash functions uses
* Hash tables (for data storage)
* Quick comparison of files ( documents, photos etc )
* A small change in the input should be highly likely to product a change in the output
* Common misconception is that different messages will always have different hash codes and different signatures (not true) 

##Requirements for a cryptographic hash function

__One-way property__: For any given value h, it is very hard to find x so that H(x) = h

__Weak collision resistance__: Given an input, it is hard to find an input that produces the same hash code

__Strong collision resistance__: It is hard to find ANY inputs that will have the same hash function output

##Hash functions recommended for use

__SHA-1/2/3__: SHA stands for secure hash algorithm
__MD5__: Considered broken
__RIPEMD-160__: 160 bit output

##When is a hash function broken?

If there is a method for finding collisions significantly quicker than brute force

