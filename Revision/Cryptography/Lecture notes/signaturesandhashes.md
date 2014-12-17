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
