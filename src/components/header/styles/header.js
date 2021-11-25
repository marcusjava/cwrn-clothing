import { css } from "styled-components";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";

export const Container = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  cursor: pointer;
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Option = styled(Link)`
  ${OptionStyles}
`;

export const SignOut = styled.div`
  ${OptionStyles}
`;
