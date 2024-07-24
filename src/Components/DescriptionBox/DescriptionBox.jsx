import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p> An E-commerce online shopping allows consumers to buy goods and services 
                directly from sellers over the internet, offering convenience and a wide selection of
                products. It has revolutionized the retail industry by providing easy access to global markets and 
                facilitating secure and efficient transactions.
            </p>
            <p>
                E-commerce websites typically display products in an organized manner, featuring categories, detailed 
                descriptions, prices, and customer reviews to facilitate easy browsing and informed purchasing decisions.
                Key features like search functionality, shopping carts, and user accounts enhance 
                the overall shopping experience, making it convenient and efficient for users.
            </p>               
        </div>
    </div>
  )
}

export default DescriptionBox