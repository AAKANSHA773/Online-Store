import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../utils/favoritesSlice";
import { Link, useNavigate } from "react-router-dom";

const FavoritesList = () => {
  const favorites = useSelector((store) => store.favorites.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (favorites.length === 0) {
   return (
    <div className="mx-auto max-w-7xl p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600"
      >
        ← Back
      </button>
    
  <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
    
      <p className="text-2xl">❤️</p>

      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        No favorite products yet
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Browse products and add your favorites here
      </p>
  
  </div></div>
);
  }

  return (
    <main className="mx-auto max-w-7xl p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600"
      >
        ← Back
      </button>
      <h2 className="mb-6 text-2xl font-semibold">
        Favorite Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border bg-gray-100 p-4"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain rounded-xl bg-white p-2"
              />
            </Link>

            <h4 className="mt-3 text-sm font-semibold">
              {product.title}
            </h4>

            <p className="mt-2 font-bold">
              ₹{product.price}
            </p>

            <button
              onClick={() => dispatch(removeFavorite(product.id))}
              className="mt-4 w-full rounded-md bg-red-500 py-2 text-white"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FavoritesList;
