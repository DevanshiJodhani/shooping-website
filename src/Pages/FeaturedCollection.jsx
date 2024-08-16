import styled from 'styled-components';

const FeaturedCollection = () => {
  return (
    <Container>
      <Content>
        <h1>Featured Collection</h1>
        <ProductBox>
          <Box>
            <ImgBox>
              <img
                src="./images/GreenModernOrganicHealthFoodLogo.jpg"
                alt="Green Modern Organic Health Food Logo"
              />
            </ImgBox>
            <Text>
              <a href="#">
                Radiance Rejuvenation Day & Night Cream Set Combo ( Pake of 2)
              </a>
              <span>Rs. 650.00</span>
            </Text>
          </Box>
          <Box>
            <ImgBox>
              <img
                src="./images/harbalwexingpowder.webp"
                alt="harbal wexing powder"
              />
            </ImgBox>
            <Text>
              <a href="#">
                Waxing Powder Instant Hair Remover For All TYpes Of Hair & Skin,
                Hands, Legs, Underarms, Bikini(Private Part) Area (100 G)
              </a>
              <span>Rs. 599.00</span>
            </Text>
          </Box>
        </ProductBox>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
`;

const Content = styled.div`
  max-width: 1300px;
  width: 100%;
  height: auto;
  margin: auto;
  padding: 20px;

  h1 {
    margin-bottom: 30px;
  }
`;

const ProductBox = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Box = styled.div`
  max-width: 300px;
  width: 100%;
  height: 400px;
  cursor: pointer;

  /* @media screen and (max-width: 950px) {
    height: 500px;
  } */
`;

const ImgBox = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
    height: 300px;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #000;
  a {
    margin-bottom: 16px;
    font-size: 15px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default FeaturedCollection;
