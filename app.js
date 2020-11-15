let render = document.querySelector('.render')
let BtnSubmit = document.querySelector('.BtnSubmit')

// on button click fetch api and if api status comes back successful render data else show msg

BtnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random") 
    .then((response)=> {
        if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else { 
        alert(' :( The api is either down or this site is getting too popular  ');
    }
})
        .then(data => {

        console.log(data)
    render.innerHTML = 
        ` <div>
            "${data.message}"
        <div>

        `
        }) 

});



