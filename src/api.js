import siteConfig from './site-config';

export default async function userLoginRequest(data) {
    return await fetch(`${siteConfig.laravelApiUrl}/api/login`, {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        method : "POST"
    })
    .then(r => r.json())
    .then(data => {
        if (data.data[1] === 'fail') {
             return false;
        } else {
            return data.data[0];
        }
    });
}