#Definition

"General purpose protocol for sending encrypted information over the internet"

* When using SSL, it is indicated by HTTPS:// and a colour coded address bar

#Main services

* Server authentication
* Client authentication
* Confidentiality through data encryption
* Data integrity

# Overview

* SSL is placed in the protocol stack between the transport layer and the application layer

# SSL Handshaking protocol

* Authentication of the server
* Authentication of the client
* Client and server 
* Establishing secret keys shared by the client and the server

## Phase 1a: Establish security capabilities (Client hello)
Contains:

* SSL version number
* Nonce (to prevent replay)
* Session ID
* Cipher suite
	* A list of algorithms that are supported by the client in order of preference
* Compression methods that are supported by the client

## Phase 1b: (Server hello)

* Highest SSL version number supported by both client and server
* Nonce: timestamp & random number (different from client-hello random number)
* Session ID
* Cipher suite
	* Cryptographic algorithms that are chosen by the server
	* I.e. the first in the list provided by the client that are available from the server
* The chosen compression method

## Phase 2: Server authentication and key exchange

* Server sends a X.509 certificate
* May request a certificate from the client
* Send `server_hello_done`

## Phase 3: Client authentication and key exchange

* The client checks the validity of the certificate sent by the server
* The client sends a certificate if one is requested

## Phase 4: Finish 

* `change_cipher_sec` sent by the client to signal that it will start using the symmetric encryption, MAC algorithms and keys agreed upon
* `finished_message` sent by the client using the algorithms that were agreed upon
* `change_cipher_spec` is sent by the server
* `finished message` sent by the server

## Using RSA & Key creation

// TODO: GO BACK OVER THE SLIDES FOR THIS, NOT SURE THEY MAKE ALL THAT MUCH SENSE TO ME

## SSL-Record protocol

* Confidentiality through symmetric encryption (using the keys established through the handshake)
* Message integrity through MAC

