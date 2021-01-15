//RESTAPI_URI is an enviroment variable defined in HEROKU. If it exists we know
//we are in production. If not we are executing locally
const apiEndPoint=process.env.RESTAPI_URI || 'http://localhost:5000/api'

export async function addUser(username,email){
    console.log("adding a user "+username)
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':username, 'email':email})
      })
    return await response.json()
}

export async function getUsers(){
    let response = await fetch(apiEndPoint+'/users/list')
    return await response.json()
}