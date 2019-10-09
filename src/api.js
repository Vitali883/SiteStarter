import siteConfig from './site-config';


export default async function userLoginRequest(data) {
    let response = await fetch(`${siteConfig.laravelApiUrl}/api/login`, {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        method : "POST"
    })
    let r = await response.json();
    if (r.data[1] === 'fail') {
        return false;
    } else {
        return r.data[0];
    }
}