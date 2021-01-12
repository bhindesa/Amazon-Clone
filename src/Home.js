
import React from 'react';
import Product from "./Product";
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />

            {/* product  id, title, price, rating, image */}
            <div className="home_row">
                <Product 
                    id="123451"
                    title="This is toolkit from web"
                    price={11.96}
                    rating={5}
                    image="https://image.shutterstock.com/z/stock-vector-flat-design-concept-hand-work-tools-box-set-vector-illustrate-291406511.jpg"
                />
                <Product 
                    id="123452"
                    title="This is Stand Mixer from web"
                    price={110.58}
                    rating={5}
                    image="https://www.canex.ca/media/catalog/product/i/m/image_5f82d8671d7d5218a274b679c0c18034_1582716734.jpg"
                />

            </div>
            <div className="home_row">
                <Product 
                    id="123453"
                    title="This is Another stand mixer white color with flexible neck from web"
                    price={150.96}
                    rating={5}
                    image="https://www.tasteofhome.com/wp-content/uploads/2019/11/KitchenAid_Customization_3.jpg"
                />
                <Product 
                    id="123454"
                    title="This is hair dryer from web"
                    price={40.99}
                    rating={5}
                    image="https://www.t3micro.com/media/catalog/tmp/category_plp/PLP-Banner_Dryers_3600x1000_3.jpg"
                />
                  <Product 
                    id="123455"
                    title="This is special mountain bike from web"
                    price={400.99}
                    rating={5}
                    image="data:image/jpeg;base64,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"
                />

            </div>
            <div className="home_row">
                <Product 
                    id="123456"
                    title="This is mountain bike from web"
                    price={600}
                    rating={5}
                    image="https://images.squarespace-cdn.com/content/v1/591ad4c4db29d6ce754a0e59/1562430378337-P08EQ4J7BLJFZC0C1ZFA/ke17ZwdGBToddI8pDm48kIyrSAlZw0scgxWGiTRYQWl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UQDXLzkH-CZ-7QKrQsh4p8lMtwqAKlza9eqEnfdUjYfAWTUnGzk3zJjDKAJuKMwn7w/Bastion_Gerrans_Final_Web_3.jpg"
                />
            </div>

            
            {/* Product */}
        </div>
    );
}
export default Home;