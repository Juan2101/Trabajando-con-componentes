function TableRow(props) {
    return (

        <tbody>
            {props.movies.map((element, i) => {
                return (
                    <tr key={element + i}>
                        <th>{element.title}</th>
                        <td>{element.lenght}</td>
                        <td>{element.rating}</td>
                        <td>
                            <ul>
                                {element.genres.map((genre, i) => <li key={genre + i}>{genre}</li>)}
                            </ul>
                        </td>
                        <td>{element.awards}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableRow