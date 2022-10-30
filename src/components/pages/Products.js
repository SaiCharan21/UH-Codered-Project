import React, {useState, useEffect} from 'react';
import '../../App.css';
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Cards from "../Cards";
import axios from "axios";

function Products() {
    const url = 'http://localhost:3002/'
    const [res, setRes] = useState(null);
    useEffect(() => {
        const getData = () => {
            axios.get('http://localhost:3002/api/get').then((response) => {
                return response
            }).then((data) => setRes(data.data))
        }

        getData()
    }, [])

    return (
        <div>
            <h1 className="products">Products</h1>
            {res && <Cards data={res}/>}
            <div className="users">
                {res && res.map((product) => (
                    <div>


                    </div>
                ))}

            </div>
            <Footer/>

        </div>

    )
}

export default Products
