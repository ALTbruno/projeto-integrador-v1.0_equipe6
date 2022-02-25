import { useEffect, useState } from 'react';
import './index.scss';

const Header = () => {
    const [isVisible, setisVisible] = useState(false);
    const [initials, setInitials] = useState('');

    useEffect(()=>{
            let user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                setInitials(user.nome[0] + user.sobrenome[0]);
            }
    },[])

    const toggleHamburger = () => {
        setisVisible(!isVisible)
    }

    return (
        <>

            <header className="d-flex flex-wrap align-items-center justify-content-between py-3  bg-primary">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none  ">
                    <svg width="40" height="40" viewBox="0 0 76 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="bi me-2 mx-4" role="img" aria-label="Bootstrap">
                        <path d="M72.4941 0H3.50586C1.56963 0 0 1.54861 0 3.45893V52.5411C0 54.4514 1.56963 56 3.50586 56H72.4941C74.4304 56 76 54.4514 76 52.5411V3.45893C76 1.54861 74.4304 0 72.4941 0Z" fill="#1D1D1B" />
                        <path d="M50.7438 38.5947C49.6205 38.5935 48.4986 38.5196 47.3851 38.3733C46.3451 38.2487 45.3278 37.9809 44.3631 37.5778C43.5204 37.2361 42.7796 36.6886 42.2105 35.9867C41.6456 35.2242 41.3612 34.2945 41.4041 33.351V10.4736H47.287V21.4384L46.1581 19.5706C46.668 18.9983 47.3002 18.5447 48.0092 18.2424C48.7408 17.9173 49.5112 17.6849 50.302 17.5506C50.9405 17.4318 51.5877 17.3647 52.2372 17.35C55.2429 17.35 57.5311 18.2447 59.1017 20.0341C60.6723 21.8235 61.4577 24.4385 61.4577 27.8789C61.5059 29.6082 61.2326 31.3315 60.6513 32.9636C60.1878 34.2295 59.4146 35.363 58.4006 36.2634C57.4154 37.0924 56.2601 37.7013 55.0139 38.0482C53.6242 38.4304 52.1863 38.6144 50.7438 38.5947ZM50.6666 33.6692C51.6502 33.7166 52.626 33.4759 53.4713 32.9774C54.1683 32.5108 54.6963 31.8371 54.9788 31.0542C55.3013 30.1479 55.458 29.1922 55.4416 28.2318C55.493 26.9978 55.2878 25.7665 54.8386 24.6137C54.5171 23.8069 53.9389 23.1248 53.1908 22.6698C52.4529 22.2618 51.6175 22.0563 50.7718 22.0749C50.1777 22.0799 49.5856 22.1448 49.0048 22.2686C48.3973 22.3898 47.8129 22.6046 47.273 22.905V31.8083C47.2585 32.0136 47.2907 32.2195 47.3671 32.4109C47.4435 32.6024 47.5623 32.7747 47.7147 32.9151C48.0662 33.2099 48.4888 33.41 48.9417 33.4962C49.508 33.62 50.0866 33.6803 50.6666 33.6761V33.6692Z" fill="white" />
                        <path d="M14.928 37.9998V11.5044H25.719C30.286 11.5044 33.6423 12.6251 35.7878 14.8665C37.9334 17.1079 39.0062 20.4054 39.0062 24.759C39.0062 29.1034 37.9334 32.394 35.7878 34.6308C33.6423 36.8675 30.286 37.9859 25.719 37.9859L14.928 37.9998ZM21.4489 33.0397H24.9547C27.3714 33.0397 29.2038 32.3779 30.4519 31.0542C31.7 29.726 32.324 27.6368 32.324 24.7728C32.324 21.9088 31.7 19.7505 30.4519 18.4361C29.2038 17.1217 27.3738 16.4576 24.9547 16.4576H21.4489V33.0397Z" fill="white" />
                        <path d="M36.531 43.776V45.5124H14.5493V43.7622L36.531 43.776Z" fill="white" />
                        <path d="M58.5127 43.776V45.5124H36.531V43.7622L58.5127 43.776Z" fill="white" />
                    </svg>

                    <span className="fs-4">Sinta-se em casa</span>
                </a>
                {initials ? <h1>{initials}</h1> : (<div className='navigation'>
                    <ul>
                        <li>Criar conta</li>
                        <li>Iniciar sessão</li>
                    </ul>
                </div>)
                }
                <button onClick={toggleHamburger} id="btn-mobile" className="m-3 hamburger">
                    <div className={`burger burger1${isVisible ? "-open" : ''}`} />
                    <div className={`burger burger2${isVisible ? "-open" : ''}`} />
                    <div className={`burger burger3${isVisible ? "-open" : ''}`} />
                </button>
                <div className={`modal${isVisible ? "-active" : ""}`}>
                    <ul>
                        <li>sdas</li>
                        <li>sdas</li>
                        <li>dasda</li>
                        <li>dsada</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;