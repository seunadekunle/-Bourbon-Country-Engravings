import styling from "../styles/FlexProduct.module.css";
import { memo } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from "react-router-dom"
import Button from './Button'


const FlexProduct = (props) => {

  const history = useHistory();

  const goToDetails = (product) => {
    history.push({
      pathname: "/Detail",
      state: { detail: product.price }
    });
  };

  return (
    <a>
      <div className={styling.FlexProduct}>
        <div className={styling.FlexImage}>
          <div className={styling.FlexLabel}>
          </div>
          <img src={props.image} loading="lazy" alt="Product" />
        </div>
        <div className={styling.FlexProduct__row}>
          <h2>{props.title}</h2>
          <Button bgColor="var(--brown)" ariaLabel="Product" textColor="#fff" padding="10px 15px " radius="5px" fontSize="10px" onClick={props.addToCart}>
            <FaCartPlus />{" "}
          </Button></div>

        <div className={styling.FlexProduct__row}>
          <h3>${props.price}</h3>
        </div>
      </div>
    </a>
  );
}

export default FlexProduct;
