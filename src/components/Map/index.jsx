import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

import { setRestaurants, setRestaurant } from '../../Redux/Modulos/Restaurants'

export  const MapContainer = (props) => {
    const dispath = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurants);
    const [map, setMap] = useState(null);
    const { google, query, placeId } = props;

    useEffect(() => {
        if(query){
            searchbyQuery(query)
        }
    },[query]);

    useEffect(() => {
        if(placeId){
            getRestaurantDetails(placeId);
        }
    }, [placeId]);

    function getRestaurantDetails(placeId){
        const service = new google.maps.places.PlacesService(map);

        const request = {
            placeId,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
        }

        service.getDetails(request, (place, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                dispath(setRestaurant(place))
            }
        })
    }

    function searchbyQuery(query){
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query,
        }

        service.textSearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                dispath(setRestaurants(results))
            }
        }) 
    }

    function searchNearby(map, center){
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        }

        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                dispath(setRestaurants(results))
            }
        }) 
    }

    function onMapReady(_, map){
        setMap(map);
        searchNearby(map, map.center)
    }

    return (
        <Map 
            google={google} 
            centerAroundCurrentLocation 
            onReady={onMapReady} 
            onRecenter={onMapReady} 
            {...props}
        >
            {restaurants.map((restaurant) => (
                <Marker
                key={restaurant.place_id}
                name={restaurant.name}
                position={{
                    lat: restaurant.geometry.location.lat(),
                    lng: restaurant.geometry.location.lng(),
                    }}
                />
            ))}
        </Map>
    )
};

export default GoogleApiWrapper ({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR',
})(MapContainer);