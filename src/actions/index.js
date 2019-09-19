const URL = `http://localhost:3000`


export function selectedArticles(id){
    const request = fetch(`${URL}/articles?id=${id}`, { method: 'GET'})
                  .then(response => response.json());

    return{
        type: 'GET_SELECTED_NEWS',
        payload:request
    }
}

export function latestArticles(){
    const request = fetch(`${URL}/articles?_order=desc&_end=3`, { method: 'GET'})
                  .then(response => response.json());
    return{
        type: 'GET_LATEST',
        payload:request
    }
}

export function otherArticles(){
    const request = fetch(`${URL}/articles?_order=desc&_start=3&_end=10`, { method: 'GET'})
                  .then(response => response.json());
    return{
        type: 'GET_OTHER',
        payload:request
    }
}




