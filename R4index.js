let url = 'https://jsonplaceholder.typicode.com/users?_limit=5'
fetch(url)
    .then(response => response.json())
    .then(data => showData(data))

const showData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `
        <tr>
        <tr>
        <td class="grey">${data[i].id}</td>
        <td class="grey">${data[i].name}</td>
        <td class="grey">${data[i].email}</td>
        <td class="grey">${data[i].phone}</td>
        <td class="grey">${data[i].website}</td>
    </tr>
    <tr>
    <td>${data[i].id}</td>
    <td>${data[i].name}</td>
    <td>${data[i].email}</td>
    <td>${data[i].phone}</td>
    <td>${data[i].website}</td>
    </tr>
    
            </tr>`
    }

    document.getElementById('data').innerHTML = body
}