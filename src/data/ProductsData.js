import chocolate from "../assets/chocolate.webp";
import Picture1 from "../assets/Picture1.png";
import Picture2 from "../assets/Picture2.png";
import Picture3 from "../assets/Picture3.png";
const ProductsData = [
  {
    id: 0,
    title: "Bottle 1",
    image: Picture1,
    price: 55,
    count: 1,
    detail: "",
    addon: "",
    addQty: function () {
      return ++this.count;
    }
  },

  {
    id: 1,
    title: "Bottle 2",
    image: Picture2,
    price: 55,
    count: 1,
    detail: "",
    addon: "",
    addQty: function () {
      return ++this.count;
    }
  },

  {
    id: 2,
    title: "Bottle 3",
    image:Picture3,
    price: 55,
    count: 1,
    detail: "",
    addon: "",
    addQty: function () {
      ++this.count;
    }
  },

  
];

export default ProductsData;