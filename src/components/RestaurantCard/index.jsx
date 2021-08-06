import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style'

import restFake from '../../assets/restaurante-fake.png'

const RestaurantCard = ({ restaurant, onClick }) => (
    <Restaurant onClick={onClick}>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars count={5} value={restaurant.rating} isHalf edit={false} activeColor='#e7711c' />
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl() : restFake} alt="Foto do Restaurante" />
    </Restaurant>
)

export default RestaurantCard;