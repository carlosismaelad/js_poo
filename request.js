const response = fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    responseData => {
        if (!responseData.ok){
            throw new Error('Erro na solicitação da API')
        }
        return responseData.json()
    })
    .then(jsonData => {
        console.log(jsonData)
    })
    .catch(error => {
        console.error('Erro', error)
    })


// console.log(response)

