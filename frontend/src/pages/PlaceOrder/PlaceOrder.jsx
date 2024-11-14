import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const shippingCost = 20000; // Costo de envío

  // Calcular el subtotal y total
  const subtotal = getTotalCartAmount();
  const total = subtotal + shippingCost;

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Información de Envío</p>
        <div className="multi-fields">
          <input type="text" placeholder='Nombres' />
          <input type="text" placeholder='Apellidos' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Dirección' />
        <div className="multi-fields">
          <input type="text" placeholder='Ciudad' />
          <input type="text" placeholder='Departamento' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Código Postal' />
          <input type="text" placeholder='País' />
        </div>
        <input type="text" placeholder='Teléfono' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Totales del Carrito</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(0)}</p> 
            </div>
            <div className="cart-total-details">
              <p>Gastos de Envío</p>
              <p>${shippingCost}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total.toFixed(0)}</b> 
            </div>
          </div>
          <button>PROCEDER AL PAGO</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
