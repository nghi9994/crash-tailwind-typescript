import MovieCard from "./MovieCard"
import { moviesData } from "./movieData"

const index = () => {
  return (
    <>
      <h3 className="border-b mt-12 mb-6 pb-4">Trending</h3>
      <div className="grid grid-cols-4 gap-5 mb-12">
        {moviesData.map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn hover:scale-125 transition ease-out duration-500">Load More</button>
      </div>
    </>
  )
}

export default index