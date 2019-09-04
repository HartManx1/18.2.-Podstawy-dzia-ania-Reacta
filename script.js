var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: "https://1.fwcdn.pl/po/05/71/30571/7529392.6.jpg"
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: "https://www.mylionking.com/w/images/thumb/4/4e/The_Lion_King_%28comic%29_01.jpg/220px-The_Lion_King_%28comic%29_01.jpg"
    },
    {
        id: 3,
        title: 'Shrek',
        desc: 'Film o ogrze',
        img: "https://upload.wikimedia.org/wikipedia/en/3/39/Shrek.jpg"
    },
    {
        id: 4,
        title: 'Toy Story',
        desc: 'Film o zabawkach',
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg"
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', { key: movie.id },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', { src: movie.img })
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));

