import CreateIcon from "../iconComponents/createIcon";
import styled from "styled-components";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

export default function Header({onClick}) {


  return (
    <>
      <Body>
        <Title>
          <Avatar />
          <Head>Lists</Head>
        </Title>
        <Link to="/newlist">
          <Button>
            <CreateIcon />
          </Button>
        </Link>
      </Body>
    </>
  );
}

const Body = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 24px 24px;
  @media (min-width: 1040px) {
    margin: 32px 40px 24px;
  }
`;

const Head = styled.p`
  color: #242424;
  font-size: 32px;
  font-weight: 700;
  margin: 0 16px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  margin: 0;
  padding: 0;
  &:active {
    fill: red;
  }
`;
