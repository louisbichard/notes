# Three types of certificates

## Certification authority certificates
Contain the public keys of CA's and either the name of the CA or the name of the service that is verified. They are usually self signed.

## Server certificates
Contain the public key of an SSL server, name of the organisation that runs the server, the DNS name of the server. Allows the SSL encryption protocol to function properly. 

## Personal certificates
Contain an individuals name and their public key. 

## Software publisher certificates
Used to verify the signatures on software that is disctributed. 