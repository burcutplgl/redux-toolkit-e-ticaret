import { useDispatch } from "react-redux"
import { removeFormCart } from "../../redux/cartSlice"


const CartComp = ({cart}) => {
  const dispatch = useDispatch()
  return (
    <div  className="my-10 flex items-center justify-between">
      <img className="w-40 h-40 object-cover" src={cart?.image} alt="" />
      <div className="w-120">
        <div className="text-xl ">{cart?.title}</div>
         <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">{cart?.price} TL ({cart?.quantity})</div>
      <div onClick={(() => dispatch(removeFormCart(cart?.id)))} className="bg-red-500 text-white w-50  text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center"> Ürünü Sil</div>
     
    </div>
  )
}

export default CartComp
