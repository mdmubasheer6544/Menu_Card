import React from 'react';

const Category = ({categoryClick,arrayCategory}) => {
    return (
        <div className="category-section">
          <div className="btn-section">
              {arrayCategory.map((category,index)=>{
                  return(
                      <div key={index}>
                          <button type="button" className="cat-btn" onClick={()=>{categoryClick(category)}}>{category}</button>
                      </div>
                  )
              })}
          </div>
        </div>
    );
};

export default Category;