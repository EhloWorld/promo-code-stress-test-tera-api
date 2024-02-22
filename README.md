# Tera API stress test

To use this change in **KeyNewAccountKey.js** and **ConnectionAndBruteForceCode.js** :

HOST to tera-api host (ip or hostname)

PORT by default 80 for HTTP

PROMO_CODE to a valid promo code

AUTH_KEY need to first run KeyNewAccountKey.js

```js
const HOST = '10.28.0.100'
const PORT = '80'
const AUTH_KEY = '3db08daa-fa93-41eb-93b6-6188ecc8471a'
const PROMO_CODE = 'FREE-100-COINS'
```

## Usage

To run simply use 'node scriptname.js'

### 1. Get AUTH_KEY

```bash
node KeyNewAccountKey.js
```

This will return 'AuthKey: 7b63b134-f2f0-45df-ae8f-ed5991bbb579'

Then copy the AuthKey to AUTH_KEY const in **ConnectionAndBruteForceCode.js**

### 2. Brute Force PromoCode

```bash
node ConnectionAndBruteForceCode.js
```

This command will use promo code until you stop the script

CTRL + C : stop the script

If the server crash or if ode is used multiple time you need to fix something or add rate limit on a reverse proxy like nginx