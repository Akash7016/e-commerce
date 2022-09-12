import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";

function Products() {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  const compountmounting = true;

  useEffect(() => {
    const getproduct = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (compountmounting) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
        console.log(filter);
      }

      return () => {
        compountmounting =false;
      }
    };

    getproduct();
  }, []);

  const Loading = () => {
    return <>
    <div className="col-md-3">
    <Skeleton height={350}/>
    </div>
    
    <div className="col-md-3">
    <Skeleton height={350}/>
    </div>

    <div className="col-md-3">
    <Skeleton height={350}/>
    </div>

    <div className="col-md-3">
    <Skeleton height={350}/>
    </div>
    </>;
  };

  const filterProduct = (category) => {
   const updatedList = data.filter((x) => x.category === category);
    setfilter(updatedList);
  }

  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setfilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewellery</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.title} height='250px' />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row column-12 my-4 py-4">
          <h1 className="display-6 text-center fs-3 fw-bolder">
            Latest Products
          </h1>
          <hr />
        </div>

        <div className="row ">
            {loading ? <Loading /> : <ShowProduct />}
            </div>

      </div>
    </div>
  );
}

export default Products;
