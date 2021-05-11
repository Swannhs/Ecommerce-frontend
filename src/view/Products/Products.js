import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../../components/actions/productActions";
import {Col, Row} from "react-bootstrap";
import Product from "./Product";

function Products() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    return (
        <div>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Products;
