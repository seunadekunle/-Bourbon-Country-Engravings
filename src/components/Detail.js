import {useContext , memo} from "react";
import { StoreContext } from "../Context/StoreContext";
import { useHistory , Link, useLocation} from "react-router-dom";
import styling from "../styles/Detail.module.css";
import  FlexProduct from  "../UI/FlexProduct.js";
import  FlexRow from "../UI/FlexRow.js";
import {toastNotification}  from "./ToastNotification";

const Detail = memo((props) => {
  const location = useLocation();
  console.log(location.state);
  const { productctx, cartctx } = useContext(StoreContext);
  const [products] = productctx;

  const [carts, setCarts] = cartctx;

const addToCart = (product) => {
  setCarts([
    ...carts,

    {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      count: product.count,
      addCount: product.addQty
    }
  ]);
  toastNotification(product ,'has been added to the cart');
}

  return (
    <div className={styling.Detail}>
      <div>hello</div>
      {/* <h1>{props.title}</h1>  */}
        <div className={styling.FlexProduct__row}>
          {/* <h2>${props.price}</h2> */}
          {/* <Button bgColor="var(--blue)" ariaLabel="Product"  textColor="#fff" padding="10px 15px " radius="5px" fontSize="15px" onClick={props.addToCart}>
          <FaCartPlus />{" "}
        </Button> */}
        </div>
    </div>

    
  );
});

export default Detail;
