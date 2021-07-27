import MenuItem from "../menu-item";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import { createStructuredSelector } from "reselect";
import { Container } from "./styles/directory";

// import { Container } from './styles';

function Directory() {
  const { sections } = useSelector(
    createStructuredSelector({ sections: selectDirectorySections })
  );

  return (
    <Container>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </Container>
  );
}

export default Directory;
