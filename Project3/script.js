let movies = [
    {
        name:"Avengers:End Game",
        poster:"https://rukminim2.flixcart.com/image/850/1000/ju2z6a80/poster/v/9/g/medium-endgameart-avengers-endgame-new-poster-for-room-office-original-imaff9ecy3wgbdtv.jpeg?q=90&crop=false",
        rating:5
    },
    {
        name:"Joker",
        poster:"https://rukminim2.flixcart.com/image/850/1000/k9u8zgw0/poster/4/s/z/large-joker-wall-posters-for-bedroom-living-room-office-pr-pos-original-imafrjq3zzttgfht.jpeg?q=20&crop=false",
        rating:4.8
    },
    {
        name:"Star Wars",
        poster:"https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg",
        rating:5
    },
    {
        name:"Lagaan",
        poster:"https://www.tallengestore.com/cdn/shop/products/7381744713908A_12c0d02b-1017-4503-919b-f0f4a503b387.jpg?v=1683929384",
        rating:4
    },
    {
        name:"Titanic",
        poster:"https://c8.alamy.com/comp/BKB5RX/titanic-year-1997-director-james-cameron-kate-winslet-leonardo-dicaprio-BKB5RX.jpg",
        rating:4.1
    },
    {
        name:"John Wick Chapter-4",
        poster:"https://image.tmdb.org/t/p/original/vppo7eOOkkjoSoBSglYIxLDB0dJ.jpg",
        rating:4.9
    },
    {
        name:"Flash",
        poster:"https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-International-01.jpeg?fit=1382%2C2048&quality=80&strip=info&ssl=1",
        rating:4.1
    },
    {
        name:"Dune",
        poster:"https://i.pinimg.com/736x/0a/bd/bd/0abdbddd92fbd981457c434096169baa.jpg",
        rating:5
    },
    {
        name:"Ra.One",
        poster:"https://pbs.twimg.com/media/D0K4oXFWkAAgcFO.jpg",
        rating:4.8
    },
    {
        name:"Shrek",
        poster:"https://m.media-amazon.com/images/I/81RlkbRjNUL._AC_UF1000,1000_QL80_.jpg",
        rating:4.8
    },
    {
        name:"Harry Potter & The Goblet Of Fire",
        poster:"https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/n/7/a/large-newposter8267-harry-potter-the-goblet-of-fire-poster-original-imaf5tgyykjgjgbz.jpeg?q=90&crop=false",
        rating:4.7
    },
    {
        name:"Aquaman",
        poster:"https://lh4.googleusercontent.com/proxy/c8ITB6jbLgsjYLgsn43iA2YSOVpRZI-TF5Yx6jCRIH7CDztL22p00Zxb1FB5sRfD3ekMQccHFqKpP9OAHKjGRuaMdwQ",
        rating:3.5

    }

];

function searchMovies(){
    let movieName = document.getElementById('search').value;

    if(movieName!=="")
    {
        let result=movies.filter(function(movie)
        {
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })

        if(result.length==0)
        {
            console.log("not found");
        }
        displayMovies(result);
    }
    else{
        displayMovies(movies);
    }
}

function  displayMovies(data){
   document.getElementById("movies").innerHTML="";
   let htmlString =``;

   for(let i=0;i<data.length;i++)
   {
    htmlString=htmlString+`
    <div class="movie">
            <div class="overlay">

                <div class="video">

                </div>

                <div class="details">

                    <h3>${data[i].name}</h3>
                    <h4>IMBD :${data[i].rating}</h4>
                    <P>Chris Evens,Scarlett Johannson,Chris Pratt</P>

                </div>

            </div>
            <img class="poster" src="${data[i].poster}" alt="poster">
        </div>

        `
   }
   console.log(htmlString);

   document.getElementById("movies").innerHTML=htmlString;
}
displayMovies(movies);




// let movieDIV = document.createElement("div");
// movieDIV.classList.add("movie");

// let overlayDIV = document.createElement("div");  
// overlayDIV.classList.add("overlay");

// movieDIV.appendChild(overlayDIV);

// console.log(movieDIV);