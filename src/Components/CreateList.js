import styled from "styled-components";
import { Link } from "react-router-dom";
import PlusIcon from "../iconComponents/plusIcon";

export default function CreateList() {
  return (
    <>
      <Link to="/newlist" style={{ textDecoration: "none", color: "#505050" }}>
        <Body>
          <Head>Create a list</Head>
          <Head>
            <PlusIcon />
          </Head>
        </Body>
      </Link>
    </>
  );
}

const Body = styled.div`
  border-style: solid;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ececec;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 32px 24px 24px;
  &:hover {
    background-color: #f4f4f4;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  }
  @media (min-width: 1040px) {
    margin: 32px 40px 24px;
  }
`;

const Head = styled.p`
fill: #242424
  color: #242424;
  font-size: 20px;
  font-weight: 600;
  margin: 0 16px;
`;
