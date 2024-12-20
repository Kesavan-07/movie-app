import React from "react";
import { useMovieContext } from "../contexts/movie";

const Favourites = () => {
  const { favourites, removeFromFavourites } = useMovieContext();

  return (
    <div className="pt-16 pb-20 px-4">
      <div>
        {favourites.length > 0 ? (
          favourites.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-100 mb-4 rounded-lg shadow-md"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start px-4 py-3">
                <div className="flex flex-col sm:flex-row items-center sm:w-[60%] mb-4 sm:mb-0">
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://placehold.co/600x400"
                    }
                    alt={movie.Title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-md mr-0 sm:mr-4 mb-2 sm:mb-0"
                  />
                  <h6 className="text-center sm:text-left text-base sm:text-lg font-medium">
                    {movie.Title}
                  </h6>
                </div>
                <button
                  onClick={() => removeFromFavourites(movie.imdbID)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm sm:text-base w-full sm:w-auto hover:bg-blue-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5 text-xl text-gray-500">
            Add your Favourites ........
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
