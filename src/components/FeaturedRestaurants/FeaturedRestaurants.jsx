import { Flex } from '@chakra-ui/react';
import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import RestaurantsGrid from '../RestaurantsGrid/RestaurantsGrid';
import RestaurantJson from '../../mockRestaurants.json'


const FeaturedRestaurants = () => {
  const [restaurants, setRestaurants] = useState(RestaurantJson.slice(0, 6));

  /*   const getSixRestaurants = async () => {
      try {
        const restaurants = await restaurantsService.getAllRestaurants();
    
        if (restaurants) {
          setRestaurants(restaurants.slice(0, 6));
        }
      } catch (err) {
        console.error(err);
      }
    };
  
    useEffect(() => {
      getSixRestaurants();
    }, []);
   */
  return (
    <Flex width={'100%'} gap={'80px'} flexDir={'column'}>
      <Title>Featured Restaurants:</Title>
      <RestaurantsGrid restaurants={restaurants} />
    </Flex>
  );
};

export default FeaturedRestaurants;
