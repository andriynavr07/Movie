const movies = [
    {
        title: "Веном 3 : Останній Танець",
        director: "Келлі Марсел",
        genre: "Екшн, Наукова фантастика",
        imageUrl: "https://pic.fullrest.ru/unTjXJHd.jpg",
        link: "Venom.html"
    },
    {
        title: "Дедпул і Росомаха",
        director: "Шон Леві",
        genre: "Екшн, Комедія",
        imageUrl: "https://itc.ua/wp-content/uploads/2024/04/GLxbQ05bwAAFb4l.jpg",
        link: "Deadpool.html"
    },
    {
        title: "Погані хлопці: Все або нічого",
        director: "Аділь Ель Арбі, Білал Фалла",
        genre: "Екшн, Комедія",
        imageUrl: "https://upload.wikimedia.org/wikipedia/uk/c/c6/%D0%9F%D0%BE%D0%B3%D0%B0%D0%BD%D1%96_%D1%85%D0%BB%D0%BE%D0%BF%D1%86%D1%96_%D0%92%D1%81%D0%B5_%D0%B0%D0%B1%D0%BE_%D0%BD%D1%96%D1%87%D0%BE%D0%B3%D0%BE.jpg",
        link: "BadBoys.html"
    },
    {
        title: "Дюна: Частина друга",
        director: "Дені Вільньов",
        genre: "Наукова фантастика, Пригоди",
        imageUrl: "https://img.tsn.ua/cached/636/tsn-28424b79aaed18622b3ebc9e28e9f35e/thumbs/608xX/d7/25/cf705701503fc1103e9b21fe406e25d7.jpeg",
        link: "Dune.html"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const movieList = document.getElementById("movie-list");

    movies.forEach((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML = `
            <a href="${movie.link}" target="_blank">
                <img src="${movie.imageUrl}" alt="Постер фільму ${movie.title}">
                <h3>${movie.title}</h3>
                <p>Режисер: ${movie.director}</p>
                <p>Жанр: ${movie.genre}</p>
            </a>
        `;

        movieList.appendChild(movieDiv);
    });
});
