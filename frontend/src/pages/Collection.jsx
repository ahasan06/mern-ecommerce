import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { IoIosArrowForward } from "react-icons/io";

import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {

  const { products } = useContext(ShopContext)

  const category = ["Men", "Women", "Kids"];
  const type = ["Topwear", "Bottomwear", "Winterwear"];
  const sortCategory = ["relevant", "low-high", "high-low"]
  // State for all products and filtered products
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // State for selected filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Mobile filter toggle
  const [showFilterinMobileView, setShowFilterinMobileView] = useState(true)

  const showFilterinMobileViewHandler = () => {
    setShowFilterinMobileView((prev) => !prev)
  }

  // Handle category selection
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories(prev =>
      checked == true ? [...prev, value] : prev.filter(cat => cat !== value)
    );
  };
  console.log("Selected cateory", selectedCategories);

  // Handle Type Change
  const handleTypeChange = (event) => {
    const { value, checked } = event.target
    setSelectedTypes(prev =>
      checked == true ? [...prev, value] : prev.filter(cat => cat != value)
    )
  }
  console.log("Selected cateory", selectedTypes);
  // Handle Type  selection
  useEffect(() => {
    setAllProducts(products)
    setFilteredProducts(products);
  }, [products])


  // State for selected filters

  const handleSortChange = (event) => {
    const { value } = event.target;
  
    if (value === "relevant") {
      // Reset to the default product order
    
      setFilteredProducts([...filteredProducts]); 

    } else {
      let sortedProducts = [...filteredProducts]; 
  
      if (value === "low-high") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (value === "high-low") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
  
      setFilteredProducts(sortedProducts);
    }
  };
  

  // filter category and type
  useEffect(() => {
    let filtered = allProducts
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((prod) => selectedCategories.includes(prod.category))
    }
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((prod) => selectedTypes.includes(prod.subCategory))
    }
    setFilteredProducts(filtered)

  }, [selectedCategories, selectedTypes, allProducts])

  console.log("filtered prducts", filteredProducts);




  return (
    <div className='flex flex-col md:flex-row gap-12 pt-10 border-t'>
      {/* left side  */}
      <div className=' min-w-60'>
        <p className='uppercase my-2 text-xl cursor-pointer hidden sm:flex items-center gap-2 '>Filters</p>
        <button onClick={showFilterinMobileViewHandler} className='uppercase my-2 text-xl cursor-pointer flex items-center gap-2 sm:hidden'>Filters
          <IoIosArrowForward
            className={`block sm:hidden bg-custom-pink p-1 rounded-full ${showFilterinMobileView ? 'rotate-90 ' : ''}`} />
        </button>
        {/* Category filter options */}
        <div className={`border border-gray-700 p-5 mt-6 ${showFilterinMobileView ? '' : 'hidden'} `}>
          <h3 className='mb-3 text-sm uppercase font-medium'>Categories</h3>
          <div className='flex flex-col gap-2'>
            {category.map(category => (
              <label key={category} className='flex items-center gap-2 font-light text-gray-700'>
                <input type="checkbox" className='w-3' value={category} onChange={handleCategoryChange} />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Sub category filter  */}

        <div className={`border border-gray-700 p-5 mt-6 ${showFilterinMobileView ? '' : 'hidden'} `}>
          <h3 className='mb-3 text-sm uppercase font-medium'>TYPE</h3>
          <div className='flex flex-col gap-2'>
            {
              type.map((type, index) => (
                <label key={index} className='flex items-center gap-2 font-light text-gray-700'>
                  <input type="checkbox" className='w-3  ' value={type} onChange={handleTypeChange} /> {type}
                </label>
              ))
            }

          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='my-2  flex items-center justify-between'>
          <Title text1={'All'} text2={'Collections'} />
          <select className='border-2 border-gray-300 text-sm px-2 py-3 ' onChange={handleSortChange} >
            {
              sortCategory.map((type, index) => (
                <option key={index} value={type}  >Sort by: {type}</option>
              ))
            }
          </select>
        </div>

        <div className='grid grid-cols-2   xl:grid-cols-3 2xl:grid-cols-4  gap-8'>
          {filteredProducts.map((item, index) => (
            <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} rating={item.rating} totalsales={item.totalsales} bestseller={item.bestseller} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default Collection