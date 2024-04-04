export default function ListaPeliculas({ movies }) {

    return (
        <main>
            {
                 movies &&(
                    <ul className="movies">
                        { movies.map(pelicula => {
                            return (
                                <li key={pelicula.id}>
                                    <p>{pelicula.title}</p>
                                    <p>{pelicula.year}</p>
                                    <img src={pelicula.image} alt={pelicula.Title}></img>

                                </li>
                            )
                        })
                        }
                    </ul>
                )
                || (
                    <p>No hay peliculas con esa busqueda</p>
                )
            }
        </main>
    )
}