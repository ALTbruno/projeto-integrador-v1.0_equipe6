import { Link } from "react-router-dom";
import StarRating from "../../components/avaliationStars";
import Classification from "../../components/classification";
import ProdutosModal from "../../components/predutosModal";
import ProdutosCarrosel from "../../components/produtosCarrosel";

const PaginaProdutos = () => {



    return (
        <>
            {/* Bloco de Titulo */}
            <div className="p-1 d-flex align-items-center" style={{backgroundColor: "#545776"}}>
                <div>
                    <h6 className="ms-5 mt-2 mb-0 text-light" >Categoria</h6>
                    <h2 className="ms-5 my-0 fw-bold text-light">Nome Hotel</h2>
                </div>
                <div className="ms-auto me-5 text-light">
                    <p>voltar</p>
                </div>
            </div>

            {/* Bloco de Endereço */}
            <div className="p-1 d-flex align-items-center" style={{backgroundColor: "#bfbfbf"}}>
                <div>
                    <h6 className="ms-5 my-0 text-dark">Localização</h6>
                </div>
                <div className="ms-auto me-5 d-flex align-items-center">
                    <StarRating/>
                    <Classification/>   
                </div>
            </div>

            {/* Bloco de Imagem */}        
            <div className="p-2 border d-flex align-items-center justify-content-center mw-100"> 

                <div className="p-1 w-50" >
                    <img className="img-fluid rounded-3" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="" srcset="" />
                </div>

                <div className="w-25" >   
                    <div className="p-1 w-100">
                        <img className="img-fluid rounded-3" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="" srcset="" />
                    </div>
                    <div className="p-1 w-100">
                        <img className="img-fluid rounded-3" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="" srcset="" />
                    </div>
                </div>

                <div className="w-25" >
                    <div className="p-1 w-100">
                        <img className="img-fluid rounded-3" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="" srcset="" />
                    </div>
                    <div className="p-1 w-100 position-relative">
                    <ProdutosModal/>
                        <img className="img-fluid rounded-3" src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768" alt="" srcset="" /> 
                    </div>
                </div>

            </div>

            {/* Bloco de Descrição */}
            <div>
                <h2>bloco descrição</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci modi blanditiis harum velit repellat et nisi qui delectus! Earum culpa ex natus non laudantium repellat voluptatibus, incidunt amet quibusdam!</p>
            </div>

            {/* Bloco de Caracteristicas do Produto */}
            <div>
                <h2>bloco caracteristicas do produto</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam adipisci modi blanditiis harum velit repellat et nisi qui delectus! Earum culpa ex natus non laudantium repellat voluptatibus, incidunt amet quibusdam!</p>

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