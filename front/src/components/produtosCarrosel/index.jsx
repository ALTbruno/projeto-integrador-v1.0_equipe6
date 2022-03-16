import { useState } from "react";
import { Carousel } from "react-bootstrap";

const ProdutosCarrosel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>

            {[ ... Array(5)].map(() => {

                return (
                    <Carousel.Item>
                        <img className="img-fluid rounded-3 w-100" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="" srcset="" />
                    </Carousel.Item>
                    
                )
            })} 

            </Carousel>     
              
        </>
    )
}

export default ProdutosCarrosel