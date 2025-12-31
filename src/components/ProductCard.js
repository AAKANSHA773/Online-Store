const ProductCard = (props) => {
  const { productData } = props;
  const { title, price, image } = productData;

  return (
    <div className="w-52 rounded-2xl border border-gray-200 bg-gray-100 p-4 shadow-sm transition hover:shadow-md hover:scale-[1.02]">
      <img
        className="h-40 w-full object-contain rounded-xl bg-white p-2"
        alt={title}
        src={image}
      />

      <h4 className="mt-3 line-clamp-2 text-sm font-semibold text-gray-900">
        {title}
      </h4>

      <h5 className="mt-2 text-base font-bold text-gray-800">
        ₹{price}
      </h5>
    </div>
  );
};

export default ProductCard;
