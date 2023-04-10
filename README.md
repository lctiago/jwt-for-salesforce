# jwt-for-salesforce
JWT token generator to be used on Salesforce server to server flow

1 - Generate the private and the public key with the following commands

$ openssl genrsa -out privatekey.pem 2048

$ openssl req -new -x509 -key privatekey.pem -out publickey.cer -days 3650

2 - Create your Salesforce Connected App uploading on it the public key previously created.

3 - Use this generator to generate a JWT token. It's required a file named .env with the value of environment variable.
CLIENT_ID #from the connected app
SALESFORCE_USER #your Salesforce user
SALESFORCE_LOGIN_URL #URL from the ORG

4 - Send a POST request passing the token from the step 3

POST
https://login.salesforce.com/services/oauth2/token?grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&
assertion=<JWT from Step 3>

See <a href="https://mannharleen.github.io/2020-03-03-salesforce-jwt/">this blog</a> for more detailed steps
