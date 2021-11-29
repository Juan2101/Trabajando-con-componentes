import TableRow from "./TableRow"

const movies = [
    {
        title: "Billy Elliot",
        lenght: 123,
        rating: 5,
        genres: ["Drama", "Comedia"],
        awards: 2,
    },
    {
        title: "Alicia en el país de las maravillas",
        lenght: 142,
        rating: 4.8,
        genres: ["Drama", "Acción", "Comedia"],
        awards: 3,
    }
]

function Table(props) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Género</th>
                    <th scope="col">Premios</th>
                </tr>
            </thead>

            <TableRow movies={movies}/>
            
        </table>
    )
}

export default Table