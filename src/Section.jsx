import React, { useEffect, useState } from "react";
const Section = () => {
    const [length, setlength] = useState(1);
    const [price, setprice] = useState(300); // default max
    const [products, setProducts] = useState([
        { id: 1, title: "accusantium dolore", price: 224.25, image: "homeimage/perspiciatis-unde.jpg" },
        { id: 2, title: "rem aperiam", price: 224.25, image: "homeimage/rem-aperiam.jpg" },
        { id: 3, title: "adipisci velit", price: 224.25, image: "homeimage/adipisci-velit.jpg" },
        { id: 4, title: "omnis iste", price: 224.25, image: "homeimage/omnis-iste.jpg" },
        { id: 5, title: "accusantium dolore", price: 100.25, image: "homeimage/perspiciatis-unde.jpg" },
        { id: 6, title: "rem aperiam", price: 150.25, image: "homeimage/rem-aperiam.jpg" },
        { id: 7, title: "adipisci velit", price: 189.25, image: "homeimage/adipisci-velit.jpg" },
        { id: 8, title: "omnis iste", price: 445.25, image: "homeimage/omnis-iste.jpg" }
    ]);

    const filteredProducts = products.filter(product => product.price <= price);

    return (
        <>
            <div className="section-block">
                <div className="container">
                    <div className="section-inner">
                        <div className="section-items-left">
                            <div className="section-item-left">
                                <ul className="fashion">
                                    <li>
                                        <a href="#">shop</a>
                                    </li>
                                    <li>
                                        <ul className="fashion-menu" >
                                            <li>
                                                <a href="#" onclick="fa_material()" >fashion</a>
                                                <ul className="fashion-material">
                                                    <li>
                                                        <a href="#">men</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">women</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">kids</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">unisex</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">jewellery</a>
                                            </li>
                                            <li>
                                                <a href="#">furniture</a>
                                            </li>
                                            <li>
                                                <a href="#">Autoparts</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="section-item-left">
                                <ul className="product">
                                    <li>
                                        <a href="#">filter by</a>
                                    </li>
                                    <li>
                                        <ul className="product-menu">
                                            <li>
                                                <a href="#">categories</a>
                                                <ul className="range">
                                                    <li><input type="range" min={1} max={50} value={length}
                                                        onChange={(e) => { setlength(e.target.value) }} />{length}</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">brand</a>
                                            </li>
                                            <li>
                                                <a href="#">price</a>
                                                <ul className="range">
                                                    <li><input type="range" min={0} max={300} value={price}
                                                        onChange={(e) => setprice(Number(e.target.value))} />{price}</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="section-item-left">
                                <div className="section-item-inner">
                                    <div className="image">
                                        <a href="#">
                                            <img src="homeimage/advertising-s1.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-items-right">
                            <div className="section-item-righttop">
                                <div className="section-item-inner">
                                    <div className="image">
                                        <img src="homeimage/main2.png" alt="" />
                                    </div>
                                    <div className="section-text">
                                        <span>fashion</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet
                                            asperiores porro?quo et mollitia facere aliquam suscipit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="section-item-rightbottom">
                                <div className="section-item-inner">
                                    <div className="product-list">
                                        <div className="product-list-inner">
                                            <span><a href="#"><i className="fa fa-th-large"></i></a></span>
                                            <span><a href="#"><i className="fa fa-th-list"></i></a></span>
                                            <p>There are 12 products.</p>
                                        </div>
                                    </div>
                                    <div className="sortby">
                                        <div className="product-list-inner">
                                            <div className="dropdown-menu">
                                                <label for="sortby">sort by :</label>
                                                <select name="filter" id="filter">
                                                    <option value="1">Relevance</option>
                                                    <option value="1">name,A to Z</option>
                                                    <option value="2">name,A to Z</option>
                                                    <option value="3">Price, low to high</option>
                                                    <option value="3">Price, high to low</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-items">
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map(product => (
                                            <div className="featured-item" key={product.id}>
                                                <div className="featured-item-inner">
                                                    <div className="image">
                                                        <img src={product.image} alt={product.title} />
                                                        <div className="product-card">
                                                            <a href="#"><i className="fa-solid fa-eye"></i></a>
                                                            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="featured-text">
                                                        <a href="#">{product.title}</a><br />
                                                        <a>${product.price.toFixed(2)}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No products found in this price range.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section;