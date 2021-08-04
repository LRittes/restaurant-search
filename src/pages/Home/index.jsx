import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from "react-slick";

import logo from '../../assets/logo.svg'

import { Card, RestaurantCard, Modal } from '../../components';
import { Container, Search, Logo, Wrapper, Map, Carousel, TitleCarousel } from "./styles";

import restFake from '../../assets/restaurante-fake.png'

const Home = () =>{ 
    const [inputValue, setInputValue] = useState('');
    const [ModalOpen, setModalOpen] = useState(true);

    const settings = { // caroseul 
        dots: false, // pontinhos de baixo do slide
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,// adapitar a altura do conteudo
    };

    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="" />
                    <TextField
                        label='Pesquisar Restaurante'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                        >
                        <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} 
                        />
                    </TextField>
                    <TitleCarousel>Na sua Área</TitleCarousel>
                    <Carousel {...settings}>
                        <Card photo={restFake} title='sei la porra' />
                        <Card photo={restFake} title='sei la porra' />
                        <Card photo={restFake} title='sei la porra' />
                        <Card photo={restFake} title='sei la porra' />
                        <Card photo={restFake} title='sei la porra' />
                        <Card photo={restFake} title='sei la porra' />
                        <Card photo={restFake} title='sei la porra' />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map/>
            <Modal open={ModalOpen} onClose={() => setModalOpen(!ModalOpen)} />
        </Wrapper>
    )
};

export default Home;