const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// const generateJoke = () => {
//   fetch('https://icanhazdadjoke.com/', {
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       //   console.log(data);
//       if (!data.error) {
//         jokeEl.innerHTML = data.joke;
//       } else {
//         window.alert('Oops! There was an error generating your dad joke.');
//       }
//     });
// };

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com/', config);
  const data = await res.json();
  jokeEl.innerText = data.joke;
};

generateJoke();

// Add event listener to button
jokeBtn.addEventListener('click', generateJoke);
