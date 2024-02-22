const http = require('http');
const crypto = require('crypto');

process.on('uncaughtException', (err) => { console.error('ERR', err) });

const HOST = '10.28.0.100'
const PORT = '80'

function createNewAccount(login) {
    return new Promise((resolve) => {
        let options = {
            host: HOST,
            port: PORT,
            path: '/tera/LauncherSignupAction',
            method: 'POST',
        };

        let req = http.request(options, (res) => {
            res.setEncoding('utf8');

            let data = '';

            res.on('data', (chunk) => { data += chunk });

            res.on('end', () => {
                let json = JSON.parse(data)
                if (json.AuthKey) {
                    console.log('AuthKey:', json.AuthKey)
                }
                else {
                    console.log('BODY: ' + data);
                }
            });
        });

        req.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.end(`login=${login}&email=uwu%40uwu.uwu&password=Ajrgrjgd123*`);
    });
}

let login = crypto.randomBytes(5).toString('hex');
createNewAccount(login);
