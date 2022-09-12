import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useParams } from "react-router-dom";

function Products() {
    const {id} = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  

  useEffect(() => {
    const getproduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setproduct(await response.json());
        setloading(false);
        console.log(product);
      
    };

    getproduct();
  }, []);

  const Loading = () => {
    return <>
      <div className="col-md-6">
        <Skeleton height={400}/>
      </div>
      <div className="col-md-6" style={{lineHeight:3}}>
        <Skeleton height={50} width={300}/>
        <Skeleton height={85}/>
        <Skeleton height={30} width={150}/>
        <Skeleton height={50} width={200}/>
        <Skeleton height={80} />
        <div className="container d-flex">\
        <Skeleton height={50} width={100} />
        <Skeleton height={50} width={100} style={{marginLeft:6}}/>
        </div>
      </div>
    </>;
  };

  console.log(product);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>

        <div className="col-md-6">
          <h4 className="text-black-50 text-uppercase">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">Rating {product.rating && product.rating.rate} <i className="fa fa-star"/></p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-3">Add To Cart</button>
          <button className="btn btn-dark ms-2">Go To Cart</button>
        </div>

      </>
    );
  };

  return (
    <div>
      <div className="container py-5">

        <div className="row py-5">
            {loading ? <Loading /> : <ShowProduct />}
            </div>

      </div>
    </div>
  );
}

export default Products;
