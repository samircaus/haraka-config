
This is configuration for [Haraka](https://haraka.github.io/), great open source SMTP server written in node.js

The custom plugin contains modifed [CoudchDb plugin](https://github.com/maxogden/haraka-couchdb) which will store all emails to Couch database.

To start install Haraka globally
```
npm install -g Haraka
```
Clone this repository. Start Haraka with path pointing to the cloned folder.
```
haraka -c .                                                                                                   
```
See sample send-email.js how to send email using Node Mailer.