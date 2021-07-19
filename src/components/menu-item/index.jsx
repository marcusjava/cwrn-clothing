import "./styles.scss";
import { withRouter } from "react-router-dom";
// import { Container } from './styles';

function MenuItem({ title, imageUrl, size, history, match, linkUrl }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`/shop/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
