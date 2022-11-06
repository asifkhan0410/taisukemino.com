---
title: >-
  Digital Signatures in a Blockchain
description: >-
  Cryptography is a core part of blockchain technology. You won’t understand how
  it works if you skip this subject. That said, cryptography…
date: '2018-12-20T08:22:12.032Z'
keywords: []
slug: >-
  /@taisukemino/ds
language: "en"
---

## Cryptography and Symmetric Encryption
Cryptography is a core part of blockchain technology. You won’t understand how it works if you skip this subject. That said, cryptography is not all that difficult to understand(unless you dig deeper into the math-heavy part of it). In this post, I will be explaining general ideas of cryptography, symmetric encryption, asymmetric encryption(aka public-key cryptography) and finally digital signatures. You will be able to understand how blockchain technology uses digital signatures to claim the ownership of cryptocurrencies if you follow along.

### What Is Cryptography?
First things first, “What is cryptography?” This video below is the scene from [The Imitation Game](https://www.imdb.com/title/tt2084970/) where Alan Turing(arguably the father of the computer) is taking a class with his friend.

[![The Imitation Game](http://i3.ytimg.com/vi/6I2cu6h7Ycs/maxresdefault.jpg)](https://www.youtube.com/watch?v=6I2cu6h7Ycs)

This is cryptography! He was exchanging encrypted messages with his friend in the classroom so that other people cannot understand what they were talking about. You could see that the clueless teacher thought their notes were gibberish. The major idea of cryptography is **keeping secrets so that we can prevent our data from being accessed by unauthorized people**. In fact, the word _cryptography_ was derived from the Greek word kryptos, meaning “hidden”.

Cryptography might not sound familiar to you, but it is around us. People love gossip and secrets. In that sense, we are all cryptographers.

Now let’s take a look at a specific example of encryption: the Caesar Shift Cipher. Yes, Julius Caesar was using this encryption. Cryptography has been around for a long time.

[Here](https://codepen.io/Tai/pen/BGYvpV) is a demo of the Caesar Shift Cipher. Click on the _Decrypt_ button. You should see the word “_blockchain_”. Now…compare the ciphertext with the plaintext. Spend some time to figure out how this encryption system works.

Now I share with you [another demo](https://codepen.io/Tai/pen/aaxvjz) that uses the same encryption system. But before you click the _Decrypt_ button, spend some time to think about this cryptographic system. What do you think you will get when you decrypt this text?

Did you get the answer right? You should see “ethereum”.

Now, how does this work? It’s quite simple. It replaces each letter in the message with the one that is three places further down the alphabet.

![](https://cdn-images-1.medium.com/max/800/1*E-NPAcnhd303Bo3p733hrA@2x.jpeg)

Before you read further, I suggest that you play a bit with this cryptography [here](http://rumkin.com/tools/cipher/caesar.php) so that you can get an intuitive understanding. Set the number to 3 and type some text. Then you will see encrypted texts at the bottom.

### An Algorithm and Key
Now that you know what cryptography is, let’s dig deeper. There are two important concepts in cryptography: **an algorithm and a key**.

Let’s say Alice wants to send a secret message to Bob in a classroom. In order to keep the secret, she encrypts the plaintext with an algorithm and a key. Once Bob receives the message from her, he uses the same algorithm and key shared with him upfront to decrypt the message. What do I exactly mean by an algorithm and a key?

![](https://cdn-images-1.medium.com/max/800/1*b2jLcOpBFXQNtQDuJufcmQ@2x.jpeg)

In the case of the Caesar Shift Cipher, the algorithm is to replace one alphabet with another by shifting the alphabet. How many patterns are there when you shift alphabets? 26 patterns. This means there are 26 keys. In this case, she chooses the key that replaces each letter in the message with the one that is three places further down the alphabet. So when I told you to select number 3 on [this website](http://rumkin.com/tools/cipher/caesar.php), I was giving you the key.

![](https://cdn-images-1.medium.com/max/800/1*p_eaUMzMuak7z1cnofHUfQ@2x.jpeg)

**The algorithm is a general system for encryption, and it needs to be specified exactly by selecting a specific key**.

Congrats! You already learned one major form of cryptography. It’s called **symmetric** **encryption:** **you** **share the same algorithm and key only with the other party and then you use them to encrypt/decrypt the message**. In this way, only someone with the correct key can communicate.

### How to Hack Symmetric Encryption System
But is symmetric encryption safe? Let’s see if we can hack it. Imagine that Alice and Bob are in a long-distance relationship, and they want to exchange messages secretly. This time, they are not going to use the Caesar Shift Cipher because people can easily crack it once they know the algorithm given that there are only 26 different patterns. It’s important that the encryption system won’t be cracked just by showing the algorithm([Kerckhoffs’ Principle](https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle)). Instead, they are going to use a more robust algorithm called AES(Advanced Encryption Standard), which is a widely used symmetric encryption system today. They use keys associated with it so that there is an almost infinite number of patterns the attacker has to try.

![](https://cdn-images-1.medium.com/max/800/1*SUE8pRij9jiAlko9wzQKlw@2x.jpeg)

Sure, the AES is robust encryption, but you desperately want to know what they are talking about. How do you do that? It’s important to note that both parties have to know the same key because it means that they have to share the information somehow.

Yes, you could steal the key when they share it. Symmetric keys are hard to share especially when the two parties are physically far apart. They probably share it on the Internet, and there is a possibility that somebody eavesdrops in transit.

![](https://cdn-images-1.medium.com/max/800/1*lhtbfGeA9WtXZNdnx7V34w@2x.jpeg)

Once you steal the key, you can easily read the message. The problem with a symmetric encryption system is that **both parties need to know the same key, and thus there is a possibility that** **the key might be stolen in transit**.

As a side note, this doesn’t mean symmetric encryption is useless although it is not perfect for everything. For example, [iPhone has a dedicated AES-256 crypto engine](https://www.apple.com/business/docs/iOS_Security_Guide.pdf). All the important data on your phone — photos, messages, contacts, reminders, call history — are encrypted by default. Nobody but you can access the iPhone’s contents unless your passcode is compromised. There is no problem with using symmetric encryption here because you are not gonna share the key. In storage encryption, the “sender” and “recipient” are the same person but at different points in time. On top of that, symmetric encryption is efficient compared to another encryption system. Speed and power efficiency are critical in mobile devices considering performance and battery life problems. In general, symmetric encryption is considered to be a good fit for file encryption on mobile devices.

But what if we want to secretly communicate with somebody who is physically apart? This is where an asymmetric encryption system comes along.

## Asymmetric Encryption
I cannot overstate how revolutionary the paradigm shift from the symmetric encryption to the asymmetric encryption(also called public-private key encryption) was in the world of cryptography.

The distinct difference between these two systems is that there are two different keys in asymmetric encryption. You **create a pair of complementary keys** by using the cryptographic software. The two keys are different yet mathematically related. **One key is called a public key, and another key is called a private key. You give your public key to everyone else and keep the private key for yourself.**

![](https://cdn-images-1.medium.com/max/800/1*R3ypLg7PrDKsgVmjCafT1g@2x.jpeg)

A public key is your email address in a sense that 1) you can communicate with other people by sharing it and 2) there is no problem with sharing it in terms of security. Whereas, a private key is your password in a sense that you should never, ever share it.

You can easily derive the public key from the private key, but you cannot guess what the private key is from the public key. In other words, they have the _one-way_ relationship. Going the public-to-private direction is equivalent to brute-force guessing an unfathomably large number of possibilities. This is why it’s safe to share your public key.

Let’s say Alice and Bob want to exchange messages. Alice generates a public and a private key pair, send her public key to Bob, and keep her private key to herself. Likewise, Bob generates a key pair, send his public key to Alice, and keep his private key to himself.

![](https://cdn-images-1.medium.com/max/800/1*fkw6A1Yssi8AgsUNCeQ7kw@2x.jpeg)

If Alice wants to send Bob a secret message, she uses Bob’s public key to encrypt the message, and send the message to him. This message will stay encrypted until Bob — and only Bob — unlocks the encrypted message with his private key.

![](https://cdn-images-1.medium.com/max/800/1*_deNqWddNVERqilbAOlWYw@2x.jpeg)

Conversely, if Bob wants to send Alice a secure message, he uses Alice’s public key to encrypt the message, and send the message to her. This message will stay encrypted until Alice — and only Alice — unlocks the encrypted message with her private key. A receiver is in charge of encryption in this system in a sense that a sender uses the receiver’s public key.

![](https://cdn-images-1.medium.com/max/800/1*wpR35EJVu-i_wG_3myifJQ@2x.jpeg)

The beauty of the asymmetric system is that **you don’t have to take the risk of transporting the private key.** Everyone can create a ciphertext with the public key, but only the owner of the private key can decrypt the ciphertext and read the message. Whereas, in a symmetric encryption system, there was only one key, and you had to share that with the other party somehow, which was the significant vulnerability: once one of the parties is compromised, the whole system is broken. In essence, the asymmetric encryption system solved the key distribution problem.

### How To Hack Asymmetric Encryption System
However, we can still hack this system. How do you do that without stealing the private key? Maybe you are wondering if it’s really okay to make one of the keys public.

In short, malicious hackers can spoof the public key. Once they change the public key with his public key, he can intercept and read the ciphertext because it was encrypted with his public key. Obviously, he can use his private key to decrypt the message. Then he can pretend to be the original sender by using the original public key and send the message to the owner of the private key. This attack is called the man-in-the-middle attack. It might look difficult to pull off but it’s still significant vulnerability. When something is hackable, somebody is going to hack it.

![](https://cdn-images-1.medium.com/max/800/1*p5mdZB5DngVjjCp5LlUpLQ@2x.jpeg)
![](https://cdn-images-1.medium.com/max/800/1*-7GgtvhobBIgrOiUOPtXMg@2x.jpeg)

The problem is that there is **no way to prove that 1) the sender is who they say they are and 2) the message was unmodified in transit.** This is where digital signatures come along.


## Digital Signatures
Among the cryptographic inventions over the past century, it’s safe to say that a digital signature is the most notable invention.

I said that a major goal of cryptography is secrecy, and this is still true, but a digital signature is not about secrecy. It’s about authenticity.

Previously, we learned that asymmetric encryption is vulnerable to the man-in-the-middle attack because it fails to prove two things below:

1. the sender is who they say they are
2. the message was unmodified in transit

The modern asymmetric algorithm such as the RSA can prove these two things through the combination of:

1. a private-to-public usage of an asymmetric encryption system
2. a hash function

This is the digital signature. The former method proves the authenticity of the sender and the latter method proves that of the message.

### A Private-To-Public Usage of an Asymmetric Encryption System
When we encrypted the message in the previous post, we used a public key to encrypt and a private key to decrypt. This is a public-to-private usage of the asymmetric encryption system. There is another way: a private-to-public usage. You use your private key to encrypt the message, and the receiver uses the public key to decrypt the message. If the decryption goes successfully, the receiver will know that they received a message from you because only you have the private key that matches the public key.

![](https://cdn-images-1.medium.com/max/800/1*pGvCdaVE83Xvu5xY5usXWg.png)

### A Hash Function
Now we know that the sender is who they say they are. But how do we know if the message was unmodified in transit? This is where a hash function comes along. The hash function is such an important building block that is widely used in the blockchain that I’d love to spend some time to explain it.

Firstly, what is a function? A function is a set of rules that takes some input and output the value as a result.

![](https://cdn-images-1.medium.com/max/800/1*3sQ3kwo56RBpQlaJWUg3NA.png)

For example, if you put a slice of bread in a toaster as the input, what does that do? It toasts it up. That’s the function. And you get the toasted bread as the output.

![](https://cdn-images-1.medium.com/max/800/1*UPwzJL9ESyNFqeaoxAuh4Q.png)

Now the hash function is a function that produces a hash value as an output for a given input. A hash value is a fixed length of bytes. You always get the fixed length of bytes no matter how big or small the input(aka, preimage) is.

For example, if you give an input “tai” to SHA256 hash function(it’s one of the hash functions. There are different kinds of hash function. Bitcoin uses SHA256. Ethereum uses KECCAK256.), you will get:

```
~> echo -n “tai” | shasum -a 256  
// f4ddd195cab04430d4595e18bd75fd48df4a0dfb3a7a28c6b2fcf3582762d49d
```

\*You can copy the command above to play in your Terminal.

Another interesting aspect of a hash function is that when I capitalize ‘t’, and hash “Tai” string, I get:

```
~> echo -n “Tai” | shasum -a 256  
// e6e6f0079cf211607a8ae808e538511684dfe5950b8afffae89b68243f189cf6
```

I merely capitalized “t”, but you can see that the output is completely different.

Moreover, if I hash “Tai” string again, I get:

```
~> echo -n “Tai” | shasum -a 256  
// e6e6f0079cf211607a8ae808e538511684dfe5950b8afffae89b68243f189cf6
```

Exactly the same result. Hash functions are deterministic, that is, the same input will always produce the same output(Deterministic literally means it has been determined yet.)

I suggest that you can play a bit on [this page](http://www.timestampgenerator.com/tools/sha256-generator/). Input the value and click the button below. You can see the hash value at the bottom. It uses the same hash function I used.

To sum up, hash functions produce:

1. a fixed length of bytes
2. the same result for the same input and the different result for the different input

An output of a hash function is called a hash value. You can think of it as **a digital equivalent of a fingerprint**. We use fingerprints to identify humans uniquely. They have been used to investigate crimes or identify offenders. A hash value can be used to identify the data. If you pass identical data through the hash function, you will get an identical hash value because again it is deterministic. If you want to make sure that the message was unmodified in transit, you get the hash value and the message together. Once you get the message, you hash it and compare it with the hash value. If they were exactly the same, it is not modified. If they were different, somebody modified it in transit.

There are other characteristics of a hash function such as being one-way, but you can ignore that for now.

### Recap
To recap, for a digital signature to function properly, we used:

1. private-to-public usage of the asymmetric encryption system to prove the sender is who they say they are
2. a hash function to prove that the message was unmodified in transit

### How To Send A Secure Message with The RSA
All right then, to summarize everything we have learned so far, let’s simulate how Alice can send a secret message to Bob without getting maliciously hacked. There are three important things to keep in mind here:

1. the message should be strongly encrypted so that only Bob can read it
2. there should be a way to prove that Alice sent the message
3. there should be a way to prove that the message was not manipulated in transit

We will use:

1. the public-to-private usage of the asymmetric encryption system to encrypt the message
2. the private-to-public usage of the asymmetric encryption system to authenticate the sender
3. a hash function to authenticate the content of the message

First, as we have seen before, Alice and Bob create their private key and public key pair. Bob sends the public key to Alice, and Alice sends the public key to Bob. Before Alice encrypts the message, she would run the message through a hash to generate a hash value. She would then take that value and encrypt it with her private key. The result is her digital signature for this message. This value then gets added to the original message which can be encrypted by Bob’s public key and transmitted to him.

Once received, the encrypted original message is decrypted by Bob’s private key and run through the same hash algorithm to generate a hash value. The digital signature is decrypted using the Alice’s public key and compared to the hash value above. If these hash values are the same, it verifies the digital signature.

![](https://cdn-images-1.medium.com/max/800/1*pOYE8kriCm2e_Ux72CeLgg.png)

## Digital Signatures in a Blockchain
Now that we know how a digital signature can authenticate the sender of the message and the content of the message by utilizing the private to public usage of asymmetric encryption and a hashing algorithm, let's look at how a blockchain integrates a digital signature.

In a blockchain, you send a transaction instead of a message. That’s it. It’s not much different from sending a message as shown below.

![](https://cdn-images-1.medium.com/max/800/1*n2x62TPSDebEtVwI8xOgwg.png)

This means you use a digital signature to prove:

1. the sender of a transaction is who they say they are
2. the transaction was unmodified in transit

Let’s think about the case where Alice sends a signed transaction to Bob.

### Alice Signs a Transaction
Alice wants to sign a transaction and thus creates her digital signature. As the owner of the account, she performs the following steps:

1. describes the transaction with all necessary information such as the involved addresses, the amount being transferred, etc…
2. creates the hash value of the transaction data
3. encrypts the hash value with the private key of her account that hands-off ownership
4. adds the encrypted text created in step 3 to the transaction as its digital signature
5. broadcasts it to the network

### Bob Verifies a Transaction
In order to verify her transaction, Bob performs the following steps:

1. creates the hash value of the transaction data to be verified except Alice’s digital signature
2. decrypts the digital signature of the transaction considering the address that sent the transaction
3. compare the hash value of step 1 with the value gained in step 2

If both were identical, you can confirm the authenticity of the owner and the integrity of the transaction data. Now Bob knows that Alice is the owner of the fund and the transaction data was not modified in transit. Other full nodes in the network also have access to Alice’s public key, and thus they can verify Alice’s transaction as well.

That’s it!
