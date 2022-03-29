import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/index';

const ProdutosCarrosel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }

    const [produtos, setProdutos] = useState({
        "id": null,
        "name": "",
        "description": "",
        "category": {
            "id": null,
            "title": "",
            "description": "",
            "imageUrl": "",
            "totalProducts": null
        },
        "city": {
            "id": null,
            "name": "",
            "country": ""
        },
        "images": [
            {
                "id": null,
                "title": "",
                "url": ""
            }
        ],
        "characteristics": [
            {
                "id": null,
                "name": "",
                "icon": ""
            }
        ]
    });
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        api.get(`/products/${id}`).then(response => {
            setProdutos(response.data);
        })
    }, [id]);

    console.log(produtos)

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>

            {produtos.images.map((item) => {

                return (
                    <Carousel.Item>
                        <img className="img-fluid rounded-3 w-100" src={item.url} alt="" srcset="" />
                    </Carousel.Item>
                    
                )
            })} 

            </Carousel>     
              
        </>
    )
}

export default ProdutosCarrosel