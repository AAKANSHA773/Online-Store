import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../utils/favoritesSlice";
import ShimmerUI from "../components/ShimmerUi";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites.items);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product)
    return (
      <p className="p-6">
        <ShimmerUI />
      </p>
    );

  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <main className="mx-auto max-w-6xl p-6">
      <button onClick={() => navigate(-1)} className="mb-6 text-blue-600">
        ← Back
      </button>

      <div className="grid gap-8 md:grid-cols-2">
        <img
          src={product.image}
          alt={product.title}
          className="h-96 w-full object-contain rounded-xl bg-white p-6"
        />

        <div>
          <h1 className="text-2xl font-semibold">{product.title}</h1>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <p
            className={`mt-1 text-sm font-medium ${
              product.rating.rate >= 4 ? "text-blue-600" : "text-yellow-600"
            }`}
          >
            ⭐ {product.rating.rate} ({product.rating.count})
          </p>

          <p className="mt-6 text-2xl font-bold">₹{product.price}</p>

          <button
            disabled={isFavorite}
            onClick={() => dispatch(addFavorite(product))}
            className={`mt-6 rounded-md px-6 py-3 text-white ${
              isFavorite ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isFavorite ? "❤️ Added to Favorites" : "🤍 Add to Favorites"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
