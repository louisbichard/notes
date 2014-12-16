#Exam notes

* 1.5 hours
* 4 questions
* Calculators are allowed
* Similar to past years
* Some marks awarded for additional revision

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


###Describe the main steps of the encryption and decryption algorithms in the Advanced Encryption Standard (AES). What encryption standard was used before AES and why did it need to be replaced?

###Explain how to use AES (or any other symmetric block cipher) in ECB (Electronic cook book) and CBC (Cipher Block Chaining) mode. 

###AES past paper question (8 marks)

####i) In relation to encryption in standard (AES) describe the main steps of encryption algorithm for block size 128 bits and key size 128 bits (You do not need to describe the decryption or the creation of round keys)

####ii) In the design of the afformentioned algorithm do you think that it was necessary that all entries in the Sbox (substitution table) should be different? Justify your answer

####iii) What encryption standard was used before AES and why did it need to be changed?

#RSA

###It is well known that if an efficient integer factorisation algortithm was found the RSA cryptosystem would be broken. Why?

#Digital signatures

###Explain what is meant by collisions for a hash function. 

###Explain what is meant by a hash function being one-way.

###Explain the notion of weak collision resistance for a hash function.

###Explain how an opponent can forge signatures if the hash function is not weak collision resistant

###Explain the notion of strong collision resistance 

###Name hash functions that are currently recommended

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

###Discuss several methods that can be used by an unauthorised person to obtain the password of a computer system. Discuss possible methods to protect against these attacks (10 marks)

###Discuss security and privacy aspects of cookies (5 marks)

###Discuss browser overflows and protection against them (5 marks)

#Network security

###What are port scanners/network scanners? How are they used for legitimate and illigitimate purposes?

###Discuss the security of the IEEE 802.11 (Wifi protocol)(6 marks)

###Discuss the security related features a customer would expect to see on an e-commerce website (only mention features visible to the customer) (10 marks)

