import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './style'

import restFake from '../../assets/restaurante-fake.png'

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurant</Title>
            <ReactStars count={5} value={4} isHalf edit={false} activeColor='#e7711c' />
            <Address>Rua Meu pau de salto auto</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restFake} alt="" />
    </Restaurant>
)

export default RestaurantCard;