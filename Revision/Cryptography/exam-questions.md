

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

###In AES encryption algorithm there are several rounds, eaching containing the operations Add Round Key, Substitute Bytes, Shift Rows, Mix Columns. Discuss how will the algorithm be affected in the following separate scenarios:

// TODO: IN ORDER TO ANSWER THESE, WATCH A YOUTUBE VIDEO

####The add round key operation is not performed at all in any round

####In each round, in the Add Round Key, instead of computing a bitwise XOR between the state and the key, we use a bitwise OR (6 marks).

####In the design of 128 bit AES do you think that it was necessary that all entries in the Sbox (substitution table) should be different? Justify your answer

###An attacker Eve could record a genuine Secure Socket Layer session between alice and her bank as it takes place. Eve could then attempt to connect to the bank later and replay the recorded session in the hope of making the bank believe this is a new communication from Alice. How is this prevented in SSL?

###What security services does SSL offer? What are the protocols included in SSL? What are the main steps of the protocols? 

###It is well known that if an efficient integer factorisation algortithm was found the RSA cryptosystem would be broken. Why?

###Explain how digital signatures are verified. 

###Assume you have a hash function which produces outputs (hash codes) which are 16 bits long. Discuss the sustainability of this function for the digital signature scheme (public key and hashing). (Taken from 2010 paper if this makes no sense)

###Explain what is meant by a hash function being one-way.

A hash function is one way if for any given value h it is very hard to find x so that H(x) = h. One way functions cannot be found out in reverse.

// TODO: CLEAN UP THIS ANSWER, IT'S FLAKEY

###Explain how an opponent can forge signatures if the hash function is not weak collision resistant

### Past paper Digital signature questions (10 marks)

####What does a certification authority and registration authority do?

###Discuss different types of attacks that occur over the internet in terms of motivation and the goals the attacker tries to achieve. 

###Discuss non technical security attacks and attacks that exploit the human element ("Social engineering")? And provide methods to protect against these attacks

###Discuss some of the potential threats when using executable content on a cient computer. Discuss possible measures to protect against these attacks

###Discuss several methods that can be used by an unauthorised person to obtain the password to a computer system. Discuss measures to take to prevent this from happening

###Discuss denial of service attacks and possible protection measures

###Discuss distributed denial of service attacks and their purpose, methods used for attack and protecting against them (no need to discuss any other type of denial of service attacks).

###Explain the terms: Virus, Worm, Trojan Horse and discuss their corresponding protection measures

###Explain why HMAC method satisfies the requirements of a MAC. 

A mac must prevent impersonation, content modification and validate the time of the message relay. 

HMAC is a hash implementaiton of the MAC concept. Buy concatenating the secret key and applying the hash function twice the message is authenticated.

// TODO: SORT THIS OUT, I DON'T REALLY LIKE IT, GOOGLE IT, THE SLIDES AREN'T GREAT

###Discuss methods of authenticating the time when a message was sent. 

Authenticating time proves the time that a message was sent at. Methods of doing this are: 

__Timestamping__: The time or date is included in the message before the whole is authenticated (e.g. PGP signatures include time). _This can also be done by a trusted third party._

__Challenge/Repsonse__: A party sends the other a nonce (random number) to which the other party should send the same number nack in an authenticated way, preventing replay. 

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

###Discuss buffer overflow attacks and possible measures to protect against them. (5 marks)

<!-- 
I AM NOT SO SURE ABOUT THESE QUESTIONS SO I AM LEAVING THEM FOR NOW, COME BACK TO THEM AT THE END IF YOU GET TIME
--> 

###Explain how to use AES (or any other symmetric block cipher) in ECB (Electronic cook book) and CBC (Cipher Block Chaining) mode. 

###For all the modes of AES: CBC, CTR, OFB, CFB, ECB:

####Assume in the plaintext there is a block of text that appears several times. Discuss whether this fact will reflect in the ciphertext for this mode

####Discuss whether this mode is suitable for producing a MAC (Message Authentication Code). In the affirmative case explain how is the MAC obtained. 

###Describe the Cipher Block Chaining mode of operation for AES including the encryption as well as decryption process. (The explanation can either be text or a diagram).

* The first block is XOR-ed with an initialisation vector and then encrypted
* The vector can be made public or kept secret ... it's usually random and changed on each use of CBC













# To address

###How does SSL use digital signatures?

When verifying the server, or optionally verifying the client