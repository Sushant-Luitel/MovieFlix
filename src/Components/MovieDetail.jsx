import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

const MovieDetail = () => {
  const params = useParams();
  const [movies, setMovies] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=e6a861d49ef07460153337003acacb75`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <main className="dark:bg-gray-900 dark:text-white">
      <div
        key={movies.id}
        className="rounded shadow-lg border bg-[#edebebf9] pb-3 overflow-hidden dark:bg-gray-900 dark:text-white "
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
          alt=""
        />
        <div className="w-64 p-2 text-xl font-medium line-clamp-2">
          {movies.title}
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam
        libero quisquam consequatur incidunt recusandae commodi minus quaerat
        reprehenderit, ad, molestiae deleniti praesentium animi? Expedita quasi
        debitis velit cupiditate nemo illo repudiandae! Unde illo hic sapiente
        odit temporibus, beatae pariatur illum voluptatum praesentium vero modi
        autem voluptatibus totam maiores quae distinctio id nemo itaque
        obcaecati! Totam accusamus et error, possimus voluptatum ex aperiam
        ducimus temporibus, fuga laudantium aliquam in odio, cum suscipit
        voluptatem laboriosam eius autem non sint minima rerum excepturi
        dignissimos eligendi! Fuga, labore! Nobis totam quisquam dolorum minima.
        Enim quas ipsum aut et, esse qui saepe adipisci accusamus non nostrum
        dolorem repudiandae, dolore laborum corporis maxime voluptatum magni ab
        nesciunt eligendi quibusdam! Doloribus delectus ipsa facilis laboriosam
        error? Possimus nemo rem cumque minus consequatur! Maxime quas omnis
        officiis harum deleniti quaerat perspiciatis tempora incidunt magnam
        iusto numquam eveniet, illum ratione asperiores itaque? Deleniti enim
        accusantium commodi dolorem tempore dolores sapiente illum at
        dignissimos possimus eaque voluptate quos exercitationem molestiae
        excepturi, temporibus, impedit consequatur fugiat. Sequi nemo placeat
        delectus laborum exercitationem. Voluptatibus veritatis iste, deserunt
        veniam iure dignissimos inventore pariatur non fugiat, similique quo
        repellat ipsa ipsum aliquam iusto libero earum excepturi illo magnam
        consectetur ex expedita at nesciunt.
      </div>
    </main>
  );
};

export default MovieDetail;
