import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { useSelector } from "react-redux";
// import Slider from "react-slick";

import logo from '../../assets/logo.svg'

import { Card, RestaurantCard, Modal, Map, Loader } from '../../components';
import { 
        Container, 
        Search, 
        Logo, 
        Wrapper, 
        Carousel, 
        TitleCarousel, 
        ModalTitle,
        ModalContent } from "./styles";

import restFake from '../../assets/restaurante-fake.png'

const Home = () =>{ 
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);
    const [placeId, setPlaceId] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null)
    const [ModalOpen, setModalOpen] = useState(false);

    const settings = { // caroseul 
        dots: false, // pontinhos de baixo do slide
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,// adapitar a altura do conteudo
    };

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue)
        }
    }

    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpen(true);
    }

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
                        onKeyPress={handleKeyPress}
                        />
                    </TextField>
                    {restaurants.length > 0 ? (
                        <>
                            <TitleCarousel>Na sua Área</TitleCarousel>
                            <Carousel {...settings}>
                                {restaurants.map((restaurant) => 
                                    <Card
                                        key={restaurant.place_id}
                                        Title={restaurant.name}
                                        photo={restaurant.photos ? restaurant.photos[0].getUrl() :
                                        restFake}
                                    />
                                )}
                                
                            </Carousel>
                        </>
                    ): <Loader/>}
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard 
                        onClick={() => {handleOpenModal(restaurant.place_id)}} 
                        restaurant={restaurant}/>
                    )
                )}
            </Container>
            <Map query={query} placeId={placeId}/>
            <Modal open={ModalOpen} onClose={() => setModalOpen(!ModalOpen)} >
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                <ModalContent>{restaurantSelected?.opening_hours?.open_now? 'ABERTO AGORA' : 'FECHADO NO MOMENTO'}</ModalContent>
            </Modal>
        </Wrapper>
    )
};

export default Home;