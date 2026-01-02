import { Link } from "react-router-dom";
import useProducts from "../hooks/useProduct";
import { LOGO } from "../utils/constant";

const ProductList = () => {
  const {
    FliterProducts,
    categories,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
    sortOrder,
    setSortOrder,
  } = useProducts();

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="mb-8 flex flex-col gap-4 rounded-xl border bg-white p-2 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="mx-auto h-16 w-16 overflow-hidden rounded-md md:mx-0 ">
          <img src={LOGO} alt="logo" className=" ml-1  h-full w-full object-cover object-center scale-100 " />
        </div>

        <input
          type="text"
          placeholder="Search Product Here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full rounded-md border px-4 py-2 md:w-1/3"
        />
        <div className="flex flex-col gap-3 md:flex-row">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-md border px-3 py-2"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-md border px-3 py-2"
          >
            <option value="">Sort by price</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </div>
        <Link
          to="/favorites"
          className="rounded-md  px-8 py-2  font-medium text-red-600 hover:bg-red-50"
        >
          ❤️
        </Link>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {FliterProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="rounded-2xl border border-gray-200 bg-gray-100 p-4 shadow-sm transition hover:shadow-md hover:scale-[1.02]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full rounded-xl bg-white object-contain p-2"
            />

            <h4 className="mt-3 line-clamp-2 text-sm font-semibold text-gray-900">
              {product.title}
            </h4>
            <p
              className={`mt-1 text-sm font-medium ${
                product.rating.rate >= 4 ? "text-blue-600" : "text-yellow-600"
              }`}
            >
              ⭐ {product.rating.rate} ({product.rating.count})
            </p>

            <p className="mt-2 text-base font-bold text-gray-800">
              ₹{product.price}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProductList;
