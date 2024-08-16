import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Content>
        <h3>Subscribe to our emails</h3>
        <Email>
          <input type="email" placeholder="Email" />
          <i class="bx bx-right-arrow-alt"></i>
        </Email>
      </Content>
      <Bottom>
        <p>
          &copy; 2024, Kanishk <a href="#">Powerd By Shopify</a>
        </p>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            {' '}
            <a href="#">Refund Policy</a>
          </li>
          <li>
            <a href="#">Terms of service</a>
          </li>
          <li>
            <a href="#">Contact information</a>
          </li>
          <li>
            <a href="#">Shipping policy</a>
          </li>
        </ul>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #242833;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: auto;
  margin: auto;
  h3 {
    text-align: center;
    color: #fff;
    font-weight: 500;
    margin-bottom: 15px;
  }
`;

const Email = styled.div`
  max-width: 500px;
  width: 100%;
  height: 50px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #aaa;

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
  }

  i {
    margin-right: 20px;
    font-size: 20px;
    color: #aaa;
  }

  &:hover {
    border: 2px solid #aaa;
  }
`;

const Bottom = styled.div`
  margin-top: 15px;
  padding: 30px;
  border-top: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  p {
    color: #fff;
    margin-right: 20px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style-type: disc;
      margin-left: 25px;
      color: #aaa;
    }
  }
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    p{
        margin-bottom: 15px;
    }
  }
`;

export default Footer;
