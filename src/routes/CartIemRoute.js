import { Router } from 'express';
import { addToCart,fetchAllCartItems,updateCartItem,deleteCartItem,emptyCart,emptyUserCart} from '../controllers/CartItemController';

const router = Router();

router.route('/addtocart').post(addToCart);
router.route('/fetchCartItems').get(fetchAllCartItems);
router.route('/updateCartItem').put(updateCartItem);
router.route('/deleteCartItem').delete(deleteCartItem);
router.route('/emptyCart').delete(emptyCart);
router.route('/emptyUserCart').delete(emptyUserCart);

export default router;