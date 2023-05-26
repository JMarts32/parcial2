const baseURL = 'https://localhost:3000/...';

async function getData(callback, endpoint){
    try{
        let headers = {
            "content-type": "application/json",
        }

        if (localStorage.getItem('token')){
            headers['Authorization'] = localStorage.getItem('token');
        }

        let response = await fetch(baseURL + endpoint, {
            method: 'GET',
            headers: headers
        });

        callback(await response.json());
    } catch (error){
        console.log(error);
        return;
    }
}

async function postData(callback, endpoint, data){
    try{

        let headers = {
            "content-type": "application/json",
        }

        if (localStorage.getItem('token')){
            headers['Authorization'] = "Bearer" + localStorage.getItem('token');
        }

        let response = await fetch(baseURL + endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        callback(await response.json());
    }catch(error){
        console.log(error);
        return;
    }
}

export { getData, postData };