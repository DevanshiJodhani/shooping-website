import styled from 'styled-components';
import FeaturedCollection from '../Pages/FeaturedCollection';
import FeaturedProduct from '../Pages/FeaturedProduct';

const Home = () => {
  return (
    <Container>
      <Content>
        <img src="./images/home_banner.jpg" alt="" />
      </Content>
      <FeaturedCollection />
      <FeaturedProduct />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 140px;
`;

const Content = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 990px) {
    width: 100%;
    height: 700px;
  }
`;

export default Home;
