import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import Table from "./Table";

const data = [
    {
        title: "Movies in Data Base",
        color: "primary",
        number: 21,
        icon: "film",
    },
    {
        title: "Total awards",
        color: "success",
        number: 79,
        icon: "award",
    },
    {
        title: "Actors quantity",
        color: "warning",
        number: 49,
        icon: "user",
    }
]

function ContentRoWTop() {
    return(
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">
                {data.map((item, i) => {
                    return <ContentRowMovies key={i}
                    title={item.title}
                    color={item.color}
                    number={item.number}
                    icon={item.icon}
                    />
                })}
            </div>
            <div className="row">
                <LastMovieInDb />
                <GenresInDb />
            </div>
            <Table />
        </div>
    )
}

export default ContentRoWTop