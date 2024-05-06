import { CartItems,CartItem } from "./models/cartItems.js";
export const addToCart = async (req,res) => {
    const cartitems = await CartItems.upsert({
      item: [req.CartItem],
    });
    try {
        res.status(201).json({
            cartitems,
        });
      } catch (err) {
        next(err);
      }
    };
export const fetchAllCartItems = async (req,res) => {
    const cartItems = await CartItems.findAll();
    cartItems.map((req.CartItem) = req.CartItem.item[0]);
    try {
        res.status(201).json({
            cartItems,
        });
      } catch (err) {
        next(err);
      }
    };
    
export const updateCartItem = async (req,res) => {
    await CartItems.update(
      { item: [req.CartItem] },
      { where: { id: CartItem.id } }
    );
    try {
        res.status(201).json({
            CartItems,
        });
      } catch (err) {
        next(err);
      }
  };

export const deleteCartItem = async (req,res) => {
    await CartItems.destroy({ where: { id: req.CartItem.id } });
    try {
        res.status(201).json({
            CartItems,
        });
      } catch (err) {
        next(err);
      }
  };
 export const emptyCart = async (req,res) => {
    await CartItems.destroy({ truncate: true });
    try {
        res.status(201).json({
            CartItems,
        });
      } catch (err) {
        next(err);
      }
  };
export const emptyUserCart = async (req,res) => {
    await CartItems.destroy({ where: { uid: req.CartItem.uid } });
    try {
        res.status(201).json({
            CartItems,
        });
      } catch (err) {
        next(err);
      }
  };
    