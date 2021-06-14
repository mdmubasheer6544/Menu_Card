import React from 'react';

const ItemList = ({items}) => {
    return (
        <section className="item-section">
          
           {items.map((item)=>{
               const{id,title,price,img,desc}=item;
               return(
                   <article key={id} className="item-card">
                     <img src={img} alt={title} className="food-img" />
                     <div>
                         <header className="price-section">
                             <h4>{title}</h4>
                             <h4 className="price">{price}</h4>
                         </header>
                         <p className="food-content">{desc}</p>
                     </div>
                   </article>
               )
           })}
          
        </section>
    );
};

export default ItemList;