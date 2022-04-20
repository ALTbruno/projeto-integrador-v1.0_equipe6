import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormLabel, FormControl, FormText, Button } from "react-bootstrap";
import api from "../../services";
import './index.scss';


const CriacaoProdutos = () => {
    const [categories, setCategories] = useState([]);
    const [city, setCities] = useState([]);
    const [characteristics, setCharacteristics] = useState([]);
    const [form, setForm] = useState({
        "categoryId": 1,
        "cityId": 1,
        "images": [],
        "characteristics": [
            1, 2, 3
        ]
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.get("categories").then(response => {
            setCategories(response.data);
        });
        api.get("cities").then(response => {
            setCities(response.data);
        });
        api.get("characteristics").then(response => {
            setCharacteristics(response.data);
        })
        console.log(characteristics)
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        if (!form.name) {
            errors.name = "Preencha com um nome valido"
        }
        return errors;
    }

    const sendData = () => {
        parseLatAndLongForFloat(form.latitude, form.longitude);
        setCityIdInt()
        var formData = new FormData();
        // gerar um formData com os dados do form para post
        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("categoryId", form.categoryId);
        formData.append("cityId", form.cityId);
        formData.append("latitude", form.latitude);
        formData.append("longitude", form.longitude);
        formData.append("characteristics", form.characteristics);;
        formData.append("images", form.images);
        formData.append("rules", form.rules);
        formData.append("healthAndSafety", form.healthAndSafety);
        formData.append("cancellationPolicy", form.cancellationPolicy);
        console.log(form.characteristics)
        console.log(form)
        let productimages = [];
        for (let i = 0; i < form.images.length; i++) {
            productimages.push(form.images[i]);
        }
        formData.append('productPhotos', productimages);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        console.log(productimages)
        // enviar o formData para o backend
        api.post("/products/add", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(form))
        sendData()
    }
    const setImages = (e) => {
        console.log(e.target.files)
        setForm({
            ...form, "images": e.target.files
        })
    }

    const handleCheck = (e) => {
        const { name, value } = e.target;
        const newForm = { ...form };
        newForm.characteristics = newForm.characteristics.filter(characteristic => characteristic.id !== parseInt(value));
        setForm(newForm);
    }

    const parseLatAndLongForFloat = (latitude, longitude) => {
        const lat = parseFloat(latitude);
        const long = parseFloat(longitude);
        setForm({
            ...form,
            latitude: lat,
            longitude: long
        })
    }
    const setCityIdInt = () => {
        const cityId = parseInt(form.cityId);
        setForm({
            ...form,
            "cityId": cityId
        })
    }

    return (
        <>
            <div className="p-3 d-flex align-items-center" style={{ backgroundColor: "#545776" }}>
                <h2 className="ms-5 my-0 fw-bold text-light">Administração de Produtos</h2>
                <div className="ms-auto me-5 text-light">
                    <a href="/">voltar</a>
                </div>
            </div>

            <div className="p-5">
                <h4 className="fw-bold">Criar Produto</h4>

                <Form onSubmit={e => handleSubmit(e)}>
                    <div className="d-flex div-nome-cat">
                        <FormGroup className="me-2 p-1 w-100">
                            <FormLabel>Nome do Produto</FormLabel>
                            <FormControl className="shadow" type="text" placeholder="Digite o Nome do Produto" name="name" onChange={e => handleChange(e)} />
                        </FormGroup>

                        <FormGroup className=" p-1 w-100 cat-prod ">
                            <FormLabel>Categoria do Produto</FormLabel>
                            <Form.Select
                                className="shadow"
                                name="categoryId"
                                onChange={e => handleCheck(e)}
                            >
                                <option>selecione uma categoria</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.title}</option>
                                ))}
                            </Form.Select>
                        </FormGroup>
                    </div>

                    <FormGroup className="my-3 p-1">
                        <FormLabel>Descrição do Produto</FormLabel>
                        <FormControl className="shadow" as="textarea" rows={5} placeholder="Digite a Descrição do Produto" name="description" onChange={e => handleChange(e)} />
                    </FormGroup>

                    <FormGroup className="my-3 p-1">
                        <FormLabel>Cidade</FormLabel>
                        <Form.Select className="shadow" name="cityId" onChange={e => handleChange(e)}>
                            <option>selecione uma cidade</option>
                            {city.map(city => (
                                <option key={city.id} value={city.id}>{city.name}</option>
                            ))}
                        </Form.Select>
                    </FormGroup>

                    <div className="my-3 p-1 d-flex justify-content-between lat-long">
                        <FormGroup className="w-100 mb-3">
                            <FormLabel>Latitude</FormLabel>
                            <FormControl className="shadow" type="text" placeholder="Digite a Latitude" name="latitude" onChange={e => handleChange(e)} />
                        </FormGroup>
                        <FormGroup className="w-100">
                            <FormLabel>Longitude</FormLabel>
                            <FormControl className="shadow" type="text" placeholder="Digite a Longitude" name="longitude" onChange={e => handleChange(e)} />
                        </FormGroup>
                    </div>

                    <div className="d-flex">
                        {/* setCharacteristics por um checkBox */}
                        <FormGroup className="p-1 w-100">
                            <FormLabel>Caracteristicas do Produto</FormLabel>
                            {characteristics.map(characteristic => (
                                <Form.Check key={characteristic.id} type="checkbox" label={characteristic.name} name="characteristics" value={characteristic.id} onChange={e => handleChange(e)} />
                            ))}
                        </FormGroup>
                    </div>

                    <div className="d-flex">
                        <FormGroup className="my-3 me-2 p-1 w-100">
                            <FormLabel>Imagens do Produto</FormLabel>
                            <FormControl className="shadow" type="file" accept="image/png, image/jpeg" multiple={true} placeholder="coloque aqui o link da imagem do produto" name="image" onChange={e => setImages(e)} />
                        </FormGroup>
                    </div>

                    <FormGroup className="my-3 p-1">
                        <FormLabel>Politicas do Produto</FormLabel>
                        <div className="d-flex justify-content-between politicas" >
                            <div className="mx-2 w-100">
                                <FormText>Regras da Casa</FormText>
                                <FormControl className="shadow" as="textarea" rows={7} name="rules" onChange={e => handleChange(e)} />
                            </div>
                            <div className="mx-2 w-100">
                                <FormText>Saúde e Segurança</FormText>
                                <FormControl className="shadow" as="textarea" rows={7} name="healthAndSafety" onChange={e => handleChange(e)} />
                            </div>
                            <div className="mx-2 w-100">
                                <FormText>Politicas de Cancelamento</FormText>
                                <FormControl className="shadow" as="textarea" rows={7} name="cancellationPolicy" onChange={e => handleChange(e)} />
                            </div>
                        </div>
                    </FormGroup>

                    <Button className="mt-5 fw-bold" type="submit" style={{ backgroundColor: '#1DBEB4', border: '#1DBEB4' }}>Criar</Button>

                </Form>
            </div>
        </>
    )
};

export default CriacaoProdutos;