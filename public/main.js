// get update button
const update = document.getElementById('update-button');

// add event listener on update button click
update.addEventListener('click', _ => {
    // store value of username and password text input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // call fetch request to the /users endpoint, with a method of PUT
    fetch('/users', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },

        // stringify response username and password elements
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
    .then(res => {
        console.log('main.js res', JSON.stringify(res));
        if(res.ok) return res.json(); // return json format if successful
    })
    .then(res => {
        window.location.reload(true);
    });
})