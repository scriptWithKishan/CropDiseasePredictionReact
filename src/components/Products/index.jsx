import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../Header";
import EachProduct from "../EachProduct";

import { GetProductsMiddleware } from "../../middleware/GetProductsMiddleware";
import {
  setSearch,
  setSort,
  setPage,
  setFilteredProducts,
  setCategories,
  setRatingFilter,
  setDiscountFilter,
} from "../../redux/ProductsSlice";

import {
  ProductsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
  ProductsCard,
  FilterContainer,
  ProductsList,
  FilterHeading,
  FilterItems,
  SortingFilter,
  SortingOptions,
  FilterLabel,
  FilterButton,
  PaginationContainer,
  ProductsHeading,
  ProductsCount,
  ProductsItems,
  ProductElement,
  LeftButton,
  RightButton,
} from "./style";

const validCategories = [
  "Fertilizers",
  "Pesticides",
  "Seeds",
  "Plant Growth Regulators",
  "Soil Conditioners",
  "Gardening Tools",
  "Packaging & Storing",
];

const ratingFilters = [
  { label: "Above 2", value: "above2" },
  { label: "Above 3", value: "above3" },
  { label: "Above 4", value: "above4" },
];

const discountFilters = [
  { label: "Above 10%", value: "above10" },
  { label: "Above 20%", value: "above20" },
  { label: "Above 30%", value: "above30" },
  { label: "Above 40%", value: "above40" },
  { label: "Above 50%", value: "above50" },
];

function Products() {
  const {
    loading,
    error,
    products,
    search,
    sort,
    page,
    filteredProducts,
    categories,
    ratingFilter,
    discountFilter,
  } = useSelector((store) => store.productsState);
  const dispatch = useDispatch();

  const ITEMS_PER_PAGE = 5;

  // Handle search
  const handleSearch = () => {
    const lowerCaseSearch = search.toLowerCase();

    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(lowerCaseSearch);
      return matchesSearch;
    });

    dispatch(setFilteredProducts(result));
  };

  // Handle filter
  const handleFilter = () => {
    let result = products
      .filter((product) => {
        const matchesCategory = categories.length
          ? categories.includes(product.category)
          : true;

        const matchesRating =
          ratingFilter === "above2"
            ? product.ratingsAverage > 2
            : ratingFilter === "above3"
            ? product.ratingsAverage >= 3
            : ratingFilter === "above4"
            ? product.ratingsAverage >= 4
            : true;

        const matchesDiscount =
          discountFilter === "above10"
            ? product.discount > 10
            : discountFilter === "above20"
            ? product.discount > 20
            : discountFilter === "above30"
            ? product.discount > 30
            : discountFilter === "above40"
            ? product.discount > 40
            : discountFilter === "above50"
            ? product.discount >= 50
            : true;

        return matchesCategory && matchesRating && matchesDiscount;
      })
      .sort((a, b) => {
        if (sort) {
          const [key, order] = sort.split(":");
          if (key === "name") {
            return order === "asc"
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
          }
          return order === "asc" ? a[key] - b[key] : b[key] - a[key];
        }
        return 0;
      });

    dispatch(setFilteredProducts(result));
  };

  // Clear all filters
  const clearFilters = () => {
    dispatch(setCategories([]));
    dispatch(setRatingFilter(""));
    dispatch(setDiscountFilter(""));
    dispatch(setFilteredProducts(products));
  };

  // Paginated products
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Fetch products on mount
  useEffect(() => {
    GetProductsMiddleware(dispatch);
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    const updatedCategories = categories.includes(category)
      ? categories.filter((c) => c !== category)
      : [...categories, category];

    dispatch(setCategories(updatedCategories));
  };

  const handleRatingChange = (value) => {
    dispatch(setRatingFilter(value));
  };

  const handleDiscountChange = (value) => {
    dispatch(setDiscountFilter(value));
  };

  const loadingView = () => (
    <div>
      <h1>Loading</h1>
    </div>
  );

  const errorView = () => (
    <div>
      <h1>{error}</h1>
    </div>
  );
  const successView = () => (
    <>
      <ProductsList>
        <div>
          <ProductsHeading>Products</ProductsHeading>
          <ProductsCount>
            {filteredProducts.length} products found
          </ProductsCount>
          <ProductsItems>
            {paginatedProducts.map((product) => (
              <ProductElement key={product._id}>
                <EachProduct product={product} />
              </ProductElement>
            ))}
          </ProductsItems>
        </div>
        <PaginationContainer>
          <LeftButton
            onClick={() => dispatch(setPage(page - 1))}
            disabled={page === 1}
          >
            Prev
          </LeftButton>
          <span>
            {page}/{Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
          </span>
          <RightButton
            onClick={() => dispatch(setPage(page + 1))}
            disabled={page * ITEMS_PER_PAGE >= filteredProducts.length}
          >
            Next
          </RightButton>
        </PaginationContainer>
      </ProductsList>
    </>
  );

  return (
    <>
      <Header />
      <ProductsContainer>
        <SearchContainer>
          <SearchInput
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <SearchButton onClick={handleSearch}>
            <SearchIcon />
          </SearchButton>
        </SearchContainer>
        <ProductsCard>
          <FilterContainer>
            <FilterHeading>Filter Products</FilterHeading>
            <div>
              <FilterItems>Sort By:</FilterItems>
              <SortingFilter
                value={sort}
                onChange={(e) => dispatch(setSort(e.target.value))}
              >
                <SortingOptions value="name:asc">Name (A-Z)</SortingOptions>
                <SortingOptions value="name:desc">Name (Z-A)</SortingOptions>
                <SortingOptions value="price:asc">
                  Price (Low to High)
                </SortingOptions>
                <SortingOptions value="price:desc">
                  Price (High to Low)
                </SortingOptions>
                <SortingOptions value="discount:asc">
                  Discount (Low to High)
                </SortingOptions>
                <SortingOptions value="discount:desc">
                  Discount (High to Low)
                </SortingOptions>
              </SortingFilter>
            </div>
            <div>
              <FilterItems>Categories:</FilterItems>
              {validCategories.map((category) => (
                <FilterLabel key={category}>
                  <input
                    type="checkbox"
                    value={category}
                    checked={categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                  <br />
                </FilterLabel>
              ))}
            </div>
            <div>
              <FilterItems>Rating</FilterItems>
              {ratingFilters.map((filter) => (
                <FilterLabel key={filter.value}>
                  <input
                    type="radio"
                    name="rating"
                    value={filter.value}
                    checked={ratingFilter === filter.value}
                    onChange={() => handleRatingChange(filter.value)}
                  />
                  {filter.label}
                  <br />
                </FilterLabel>
              ))}
            </div>
            <div>
              <FilterItems>Discount</FilterItems>
              {discountFilters.map((filter) => (
                <FilterLabel key={filter.value}>
                  <input
                    type="radio"
                    name="discount"
                    value={filter.value}
                    checked={discountFilter === filter.value}
                    onChange={() => handleDiscountChange(filter.value)}
                  />
                  {filter.label}
                  <br />
                </FilterLabel>
              ))}
            </div>
            <FilterButton onClick={handleFilter}>Apply Filters</FilterButton>
            <FilterButton onClick={clearFilters}>Clear Filters</FilterButton>
          </FilterContainer>
          {loading ? loadingView() : error ? errorView() : successView()}
        </ProductsCard>
      </ProductsContainer>
    </>
  );
}

export default Products;
