import { useEffect, useState } from "react";

const useDebounce = (value, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const debouncedSearch = useDebounce(searchText);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log("data",json)
    setProducts(json);
  };
  
  const categories = [...new Set(products.map((p) => p.category))];
  console.log("categories",categories)
  const FliterProducts = products
    .filter((product) =>
      product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return {
    FliterProducts,
    categories,
    searchText,
    setSearchText,
    selectedCategory,
    setSelectedCategory,
    sortOrder,
    setSortOrder,
  };
};

export default useProducts;
