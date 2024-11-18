import {useState,useEffect} from React;

function ProductApp() {
  const [products,setProducts] = useState([]);
  const [filteredProducts,setfilteredProducts] = useState([]);
  const [categories,setCategories] = useState([]);
  const [sortOption,setSortOption] = useState("");
  const [selectedCategory,setSelectedCategory] = useState("")

  useEffect(()=>{
    const fetchProducts = async()=>{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setProducts(data);
      setFilteredProducts(data); 

      const uniqueCategory = ["All", ...new Set(data.map((product) => product.category)),];

      setCategories(uniqueCategories);
    }
    fetchProducts();
  },[]);
}


const handleCatagoryChange = (category) => {
  setCategoryChange(category);
}