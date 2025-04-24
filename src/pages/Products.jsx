import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "$3.99 / lb",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/apples-in-basket-title-dffeea4.jpg?quality=90&resize=556,505",
  },
  {
    id: 2,
    name: "Bananas",
    price: "$1.29 / lb",
    image: "https://m.media-amazon.com/images/I/21DejQuoT2L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Strawberries",
    price: "$4.50 / box",
    image: "https://www.allrecipes.com/thmb/oG4LKyxXjFehRf46rtksge5ep84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How-To-Store-Strawberries-4x3-1615f2fed54d4215ba9e831a52c18ff6.jpg",
  },
  {
    id: 4,
    name: "Oranges",
    price: "$2.99 / lb",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZI1gAnaYkKsMnEbmwFLJ7ahOuEZgP4105Q&s",
  },
 {
    id: 5,
    name: "Pineapple",
    price: "$3.75 / each",
    image: "https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg",
  },
  {
    id: 6,
    name: "Green Grapes",
    price: "$4.20 / lb",
    image: "https://specialtyproduce.com/sppics/7144.png",
  },
  {
    id: 7,
    name: "Watermelon",
    price: "$6.99 / each",
    image: "https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg",
  },
  {
    id: 8,
    name: "Peaches",
    price: "$3.29 / lb",
    image: "https://media.istockphoto.com/id/1151868959/photo/single-whole-peach-fruit-with-leaf-and-slice-isolated-on-white.jpg?s=612x612&w=0&k=20&c=RLTbnKnN6w85oXn4qA8y8WYN3OMpGxEDc1nI7VY0gWU=",
  },
  {
    id: 9,
    name: "Blueberries",
    price: "$5.49 / box",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUR-aZw0L4LBlVN6GVfubsupJ6GWkMyBHyQ&s",
  },
  {
    id: 10,
    name: "Avocados",
    price: "$2.00 / each",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/07/Avocado-sliced-in-half-ca9d808.jpg?quality=90&resize=440,400",
  },
  {
    id: 11,
    name: "Red Grapes",
    price: "$4.50 / lb",
    image: "https://media.istockphoto.com/id/120801661/photo/red-grapes-in-braided-basket-on-wooden-table.jpg?s=612x612&w=0&k=20&c=yQope4hlV0SJWd0wEYJtGie_2_U6dcApV1AsvwizJ4E=",
  },
  {
    id: 12,
    name: "Cherries",
    price: "$6.25 / lb",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2023/07/Cherries-02-d6ba13e.jpg?quality=90&resize=440,400",
  },
  {
    id: 13,
    name: "Papaya",
    price: "$3.49 / each",
    image: "https://lirp.cdn-website.com/7a5d8045/dms3rep/multi/opt/papaya+fruit-640w.jpg",
  },
  {
    id: 14,
    name: "Kiwi",
    price: "$0.89 / each",
    image: "https://fakazanews.com/wp-content/uploads/2021/07/kiw.jpg",
  },
  {
    id: 15,
    name: "Cantaloupe",
    price: "$4.00 / each",
    image: "https://media.istockphoto.com/id/910127132/photo/cantaloupe-melon.jpg?s=612x612&w=0&k=20&c=6ZEbJTksIL7xwwLyop99fhhxCQK8-f368GrUjlECfkw=",
  },
  {
    id: 16,
    name: "Pears",
    price: "$2.49 / lb",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAReMKrJ3qu7kZOHVAqgGGkK-voM9QMkqVhSpBVqG6RLxMNDlaXPTJ0IICGqxUQsvVEc&usqp=CAU",
  },
  
];

const Products = () => {
  const [addedToCart, setAddedToCart] = useState([]);

  const handleAddToCart = (id) => {
    if (!addedToCart.includes(id)) {
      setAddedToCart([...addedToCart, id]);
    }
  };

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <p className="text-gray-600 mb-10">
        Explore our wide range of fresh fruits and organic products.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => {
          const isAdded = addedToCart.includes(product.id);

          return (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-primary text-md font-medium">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className={`mt-3 w-full text-white py-2 px-4 rounded transition duration-300 ${
                  isAdded
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-primary hover:bg-red-600"
                }`}
                disabled={isAdded}
              >
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
