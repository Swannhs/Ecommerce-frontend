import React, {Component} from 'react';
import axios from "axios";

class Products extends Component {
    componentDidMount() {
        axios.get('http://localhost:8000/')
            .then(response => {
                console.log(response)
            })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Products;
