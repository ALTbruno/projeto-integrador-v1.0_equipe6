import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/index';
import StarRating from "../../components/avaliationStars";
import Classification from "../../components/classification";
import ProdutosModal from "../../components/predutosModal";


const PaginaProdutos = () => {
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
            {/* Bloco de Titulo */}
            <div className="p-1 d-flex align-items-center" style={{ backgroundColor: "#545776" }}>
                <div>
                    <h6 className="ms-5 mt-2 mb-0 text-light" >{produtos.category.title}</h6>
                    <h2 className="ms-5 my-0 fw-bold text-light">{produtos.name}</h2>
                </div>
                <div className="ms-auto me-5 text-light">
                    <p>voltar</p>
                </div>
            </div>

            {/* Bloco de Endereço */}
            <div className="p-1 d-flex align-items-center" style={{ backgroundColor: "#bfbfbf" }}>
                <div className="ms-auto me-5 d-flex align-items-center">
                    <StarRating />
                    <Classification />
                </div>
            </div>

            {/* Bloco de Imagem */}
            <div className="p-2 border d-flex align-items-center justify-content-center mw-100">

                <div className="p-1 w-50" >
                    <img className="img-fluid rounded-3" src={produtos.images[0].url} alt="" srcset="" />
                </div>

                <div className="w-25" >
                    <div className="p-1 w-100">
                        <img className="img-fluid rounded-3" src={produtos.images[0].url} alt="" srcset="" />
                    </div>
                    <div className="p-1 w-100">
                        <img className="img-fluid rounded-3" src={produtos.images[0].url} alt="" srcset="" />
                    </div>
                </div>

                <div className="w-25" >
                    <div className="p-1 w-100">
                        <img className="img-fluid rounded-3" src={produtos.images[0].url} alt="" srcset="" />
                    </div>
                    <div className="p-1 w-100 position-relative">
                        <ProdutosModal />
                        <img className="img-fluid rounded-3" src={produtos.images[0].url} alt="" srcset="" />
                    </div>
                </div>

            </div>

            {/* Bloco de Descrição */}
            <div style={{ backgroundColor: "#bfbfbf" }}>
                <h2>Descrição</h2>
                <p>{produtos.description}</p>
            </div>

            {/* Bloco de Caracteristicas do Produto */}
            <div>
                <h2>Caracteristicas</h2>
                {produtos.characteristics.map(characteristic => (
                    <div className="p-1 d-flex" style={{ backgroundColor: "#bfbfbf" }}>
                        <div className="">
                            <p>{characteristic.name}</p>
                        </div>
                    </div>
                ))}

            </div>

            {/* Bloco Politicas do Produto */}
            <div>
                <h2>bloco politicas do produto</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci modi blanditiis harum velit repellat et nisi qui delectus! Earum culpa ex natus non laudantium repellat voluptatibus, incidunt amet quibusdam!</p>

            </div>
        </>
    )
}

export default PaginaProdutos;