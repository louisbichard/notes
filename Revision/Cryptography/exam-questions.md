#Exam notes

* 1.5 hours
* 4 questions
* Calculators are allowed
* Similar to past years
* Some marks awarded for additional revision
* No questions regarding port sniffers and scanners in this year

# Past paper - 2009

### Decribe the one-time pad encryption and discuss its security (6 marks)

### Bob is setting up his keys for RSA cryptosystem. He has computed his keys as (e = 21, n = 187) for the public key and (d = 62, p = 11, q = 17) for the private key. Is this a correct key pair? Justify your answer. You can use any method you want for checking whether the keys are correct. If they are not, you do not need to produce alternative correct keys. (7 marks)

###Bob is using the RSA public key (e = 21, n = 187) and the correct corresponding private key for singing. Alice receives an unecrypted document M with a digital signature having the value 5. Alice is told that the message is signed by Bob. Explain how Alice will verify the signature, knowing that when applying the hash function to M, the hash code obtained is 82. For full marks use the square and multiply method where appropriate. (7 marks)

#Symmetric key cryptosystems

###Describe the general structure of a symmetric cryptographic system. Describe the general structure of a public key cryptography system. Compare the two types of systems, discussing the advantages and disadvantages and discuss how the two systems can be combined.

###Explain how the one-time pad cryptographic system works and discuss its security

###For ECB (Electronic cook book):

####Assume in the plaintext there is a block of text that appears several times. Discuss whether this fact will reflect in the ciphertext for this mode

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

###In AES encryption algorithm there are several rounds, eaching containing the operations Add Round Key, Substitute Bytes, Shift Rows, Mix Columns. Discuss how will the algorithm be affected in the following separate scenarios:

####The add round key operation is not performed at all in any round

####In each round, in the Add Round Key, instead of computing a bitwise XOR between the state and the key, we use a bitwise OR (6 marks).

###Name two formats for digital signatures

###Name three pieces of information that you feel are most important in a certificate, regardless of the format (if you can't decide which three are most important, name up to five) and briefly explain why you think they are imporant. 

###Describe the main steps of the encryption and decryption algorithms in the Advanced Encryption Standard (AES). What encryption standard was used before AES and why did it need to be replaced?

###Explain how to use AES (or any other symmetric block cipher) in ECB (Electronic cook book) and CBC (Cipher Block Chaining) mode. 

###AES past paper question (8 marks)

####i) In relation to encryption in standard (AES) describe the main steps of encryption algorithm for block size 128 bits and key size 128 bits (You do not need to describe the decryption or the creation of round keys)

####ii) In the design of the afformentioned algorithm do you think that it was necessary that all entries in the Sbox (substitution table) should be different? Justify your answer

####iii) What encryption standard was used before AES and why did it need to be changed?

#SSL

###What security services does SSL offer? What are the protocols included in SSL? What are the main steps of the protocols? 

###Explain how SSL combines the use of public key cryptography and symmetric cryptography. 

###How does SSL achieve each of the following: confidentiality, authentication, integrity, protection against replay?

###How does SSL use digital signatures?

#Public Key Cryptography

###Explain how PGP/GnuPG works for sending an encrypted email. Explain how PGP combines the use of public key cryptography and symmetric cryptography. 

###What is a PKI (Public key infrastructure)?

###What are the roles of a certification authority and a registration authority?

###How does a web browser determine whether a certificate is genuine?

###Explain how digital signatures are produced using a hash function and a public-key cryptosystem. How are digital signatures checked?

###It is well known that if an efficient integer factorisation algortithm was found the RSA cryptosystem would be broken. Why?

#Digital signatures

###What are digital signatures?

###What is the purpose of a digital signature?

###What are the main formats of a digital signature?

###What information is contained inside of a digital signature (You do not need to know all the items in a certificate, only about 5 items that you think are important). 



###Explain what is meant by collisions for a hash function. 

###Explain what is meant by a hash function being one-way.

###Explain the notion of weak collision resistance for a hash function.

###Explain how an opponent can forge signatures if the hash function is not weak collision resistant

###Explain the notion of strong collision resistance 

###Name hash functions that are currently recommended (You do not need to know the Merkle-Damgard construction and the sponge construction for hash functions)

###Past paper question (10 marks)

A typical digital signature scheme uses a hash function and a public-key cryptosystem

####Explain how the signature is produced

####Explain how the signature is verified

####What are collisions for a hash function

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

###Explain the terms: Virus, Worm, Trojan Horse and discuss their corresponding protection measures

###What does the term "authentication" mean in cryptography and why is authentication needed? What is a MAC (Message Authentication Code)? Explain the main idea for producing a MAC using a hash function. (HMAC algorithms)( You do not need to know the exact formula for HMAC ). Explain why this method satisfies the requirements of a MAC. Discuss methods of authenticating the time when a message was sent. 

###Discuss several methods that can be used by an unauthorised person to obtain the password of a computer system. Discuss possible methods to protect against these attacks (10 marks)

###Discuss security and privacy aspects of cookies (5 marks)

###Discuss browser overflows and protection against them (5 marks)

#Network security

###Discuss cookies in terms of security and privacy threats

###What are firewalls? What protection do they offer? Discuss different types of firewalls

###What is IPSec? What security service does it provide? Describe the AH and ESP version of the protocol. Describe the transport mode and tunnel mode. What are the advantages of using tunnel mode at the router/firewall of an internal network? (Note: you do not need to know the exact structure of the IPSec packets, concentrate on what security mechanisms are used e.g. MAC)

###Discuss the security of the IEEE 802.11 (Wifi protocol)(6 marks)

###Discuss the security related features a customer would expect to see on an e-commerce website (only mention features visible to the customer) (10 marks)

###What would a web browser do with a digital certificate after it finds out that it's genuine. 