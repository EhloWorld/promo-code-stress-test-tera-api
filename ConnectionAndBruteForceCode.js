const http = require('http');

process.on('uncaughtException', (err) => { console.error('ERR', err.message) });

const HOST = '10.28.0.100'
const PORT = '80'
const AUTH_KEY = '3db08daa-fa93-41eb-93b6-6188ecc8471a'
const PROMO_CODE = 'FREE-100-COINS'

let cookie;
function getCookie() {
    return new Promise((resolve) => {
        let options = {
            host: HOST,
            port: PORT,
            path: `/tera/ShopAuth?authKey=${AUTH_KEY}`,
            method: 'GET',
        };

        let req = http.request(options, (res) => {
            res.setEncoding('utf8');

            res.on('data', (chunk) => { console.log(chunk) });

            res.on('end', () => {
                let cook = res.headers['set-cookie'][0].split(';')[0];
                //cookie = cook.replaceAll('connect.sid=', '');
                cookie = res.headers['set-cookie'][0].split(';')[0]

                console.log(cookie);
                resolve(cookie);
            });
        });

        req.end();
    });
}

async function usePromoCode () {
    let options = {
        host: HOST,
        port: PORT,
        path: '/tera/ShopPromoCodeAction',
        method: 'POST',
    };

    let req = http.request(options, (res) => {
        res.setEncoding('utf8');

        let data = '';

        res.on('data', (chunk) => {
            data += chunk
        });

        res.on('end', () => {
            console.log(data)
        });
    });

    req.setHeader('Cookie', [cookie]);
    req.setHeader('Content-Type', 'application/json');
    
    req.write(JSON.stringify({ promoCode: PROMO_CODE }));
    req.end();
}

getCookie().then((sid) => {
    setInterval(() => {
        usePromoCode();
    }, 1);
});
