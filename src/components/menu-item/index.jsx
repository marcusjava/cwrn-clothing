import { withRouter } from "react-router-dom";
// import { Container } from './styles';
import { Container, Image, Content, Title, SubTitle } from "./styles/menu-item";

function MenuItem({ title, imageUrl, size, history, match, linkUrl }) {
  return (
    <Container
      className={`${size}`}
      onClick={() => history.push(`/shop/${linkUrl}`)}
    >
      <Image
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></Image>
      <Content>
        <Title>{title}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </Content>
    </Container>
  );
}

export default withRouter(MenuItem);
