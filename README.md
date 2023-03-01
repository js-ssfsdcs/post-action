# post-action
A server that accepts POST requests and returns an HTML page that displays the parameters in a table.


## Run locally, self signed cert version
Create the certs
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

Install latest version of nodejs

Execute `npm` commands to install dependencies and to start the server. Need to sudo because running on standard HTTPS port 443.
```
npm install
sudo npm start
```
