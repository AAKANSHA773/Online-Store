import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);

        const favorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        const exists = favorites.some((item) => item.id === data.id);
        setIsFavorite(exists);
      });
  }, [id]);

  const handleAddToFavorites = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.some((item) => item.id === product.id)) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (!product) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <main className="mx-auto max-w-6xl p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back
      </button>
      <div className="grid gap-8 md:grid-cols-2">

        <img
          src={product.image}
          alt={product.title}
          className="h-96 w-full rounded-xl bg-white object-contain p-6"
        />

        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {product.title}
          </h1>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <p className="mt-4 text-sm text-gray-500 capitalize">
            Category: {product.category}
          </p>

          <p
            className={`mt-3 text-sm font-medium ${
              product.rating.rate >= 4
                ? "text-blue-600"
                : "text-yellow-600"
            }`}
          >
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>

          <p className="mt-6 text-2xl font-bold text-gray-900">
            ₹{product.price}
          </p>

          <button
            onClick={handleAddToFavorites}
            disabled={isFavorite}
            className={`mt-6 rounded-md px-6 py-3 text-white transition ${
              isFavorite
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
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



