fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
	"method": "GET",
	"headers": {
		"accept": "application/json",
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "5f3947eb0dmsh8d340c75c94a6b9p142b0djsn44ef4c65f2e2"
	}
})
.then(data => data.json())
.then(jokeData => {
    const jokeText = jokeData.value;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML = jokeText;
})
.catch(err => {
	console.error(err);
});