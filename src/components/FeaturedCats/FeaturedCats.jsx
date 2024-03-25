import { Flex } from '@chakra-ui/react';
import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import CatsGrid from '../CatsGrid/CatsGrid';
import CatJson from '../../cats.json'
import catsService from '../../services/cats.service';


const FeaturedCats = () => {
  const [cats, setCats] = useState([CatJson.slice(0, 6)]);


  const getSixCats = async () => {
    try {
      const cats = await catsService.getAllCats();

      if (cats) {
        setCats(cats.slice(0, 6));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSixCats();
  }, []);

  return (
    <Flex width={'100%'} gap={'80px'} flexDir={'column'}>
      <Title>Featured Cats:</Title>
      <CatsGrid cats={cats} />
    </Flex>
  );
};

export default FeaturedCats;
