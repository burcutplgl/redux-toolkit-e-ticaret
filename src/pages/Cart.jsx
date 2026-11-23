import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";
import { SlBasket } from "react-icons/sl";


const Cart = () => {
  const dispatch = useDispatch()
  const {carts, totalAmount} = useSelector(state => state.carts)

useEffect(()=>{
  dispatch(getCartTotal())
},[dispatch, carts])

  return (
    <div>
        {
        carts?.length > 0 ? <div>
            {
                carts?.map((cart, i) =>(
                    <CartComp key={i} cart ={cart}/>

                ))
            }
            <div className="flex item-center justify-end  text-2xl "> TOPLAM TUTAR : <span className="font-bold text-2xl ml-1">{totalAmount} TL </span></div>

        </div>:
        <div  className="flex flex-col items-center justify-center min-h-75 gap-4">
            <div className="text-gray-400">
    <SlBasket size={65} />
  </div>

  <h2 className="text-2xl font-bold text-gray-700">
    Sepetiniz şu an boş!
  </h2>
   </div>
}
    </div>
  )

}
export default Cart
