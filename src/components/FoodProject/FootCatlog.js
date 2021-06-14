import React, { useState } from "react";
import Category from "./Category";
import ItemList from "./ItemList";
import { data } from "./Data";
import "./food.css";

const newArrayCategory = ["All", ...new Set(data.map((item) => item.category))];
const FootCatlog = () => {
  
  const [items, setItems] = useState(data);
  const [mainCategory, setCategory] = useState(newArrayCategory);

  const showCategory = (category) => {
  
    if (category === "All") {
      setItems(data);
      return;
     
    }
    
    let newCategory = data.filter((item) => {
      return item.category === category;
    });
    setItems(newCategory);
  };

 
  return (
    <main>
      <section>
        <div className="titleCatlog">
          <h1>Our Menu</h1>
        </div>
        <Category categoryClick={showCategory} arrayCategory={mainCategory} />
        <ItemList items={items} />
      </section>
    </main>
  );
};

export default FootCatlog;
