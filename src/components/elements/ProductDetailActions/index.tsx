import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type ProductActionProps = {
  product: {
    name: string;
    price: number;
  };
};

const ProductActions: React.FC<ProductActionProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const whatsappNumber = "+6285793869960"; // Ganti dengan nomor WhatsApp yang sebenarnya

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const totalPrice = product.price * quantity;

  const handleWhatsAppClick = () => {
    const message = `Halo kak, saya mau order ${
      product.name
    } dengan jumlah ${quantity} pcs. Total harga: Rp ${(
      product.price * quantity
    ).toLocaleString()}. Mohon dibantu proses pesanannya ya. Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="space-y-4">
      {/* Price Info */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
          <div className="space-y-1">
            <p className="text-gray-600">Harga Satuan:</p>
            <p className="font-semibold">Rp {product.price.toLocaleString()}</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-gray-600">Total Harga:</p>
            <p className="font-semibold text-lg text-red-600">
              Rp {totalPrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="product-detail__controller flex items-center space-x-4">
        {/* Quantity Controller */}
        <div className="quantity-controller -border -round flex items-center border rounded-lg overflow-hidden">
          <button
            className="quantity-controller__btn -decrease w-10 h-10 flex items-center justify-center border-r cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={handleDecrease}
          >
            -
          </button>
          <div className="quantity-controller__number w-14 text-center font-medium">
            {quantity}
          </div>
          <button
            className="quantity-controller__btn -increase w-10 h-10 flex items-center justify-center border-l cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        {/* WhatsApp Button */}
        <div className="add-to-cart -dark flex items-center space-x-2">
          <button
            onClick={handleWhatsAppClick}
            className="btn -round bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 flex items-center justify-center w-10 h-10"
          >
            <FontAwesomeIcon className="text-xl" icon={faWhatsapp} />
          </button>
          <h5 className="font-medium" onClick={handleWhatsAppClick}>
            Beli Sekarang
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;
