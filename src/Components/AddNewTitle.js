import styled from "styled-components";
import ArrowIcon from "../iconComponents/arrowIcon";
import CreateTitle from "./CreateTitle";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import ListItem from "./ListItem";
// import List from "./List";

export default function AddNewTitle({ onChange, onSubmit, list, newTitle }) {
  // const navigate = useNavigate();

  // const routeChange = () =>{ 
  //   // let path = `newPath`; 
  //   navigate('/');
  // }
  return (
    <>
      <form onSubmit={onSubmit}>
        <Body>
          <Title>
            <ArrowIcon />
            <Head>
              <Link to="/" style={{ textDecoration: "none", color: "#505050" }}>
                Cancel
              </Link>
            </Head>
          </Title>
          {/* <form onSubmit={submitHandler}> */}
            <Head type="submit">
              Done
            </Head>
        </Body>
        <CreateTitle newTitle={newTitle} onChange={onChange} />
      </form>
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

const Head = styled.button`
  color: #505050;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background-color: #fff;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// const Input = styled.input`
//   outline: none;
//   border: none;
//   font-size: 28px;
//   font-weight: 600;
//   color: #242424;
//   margin: 0px 24px 24px;
//   @media (min-width: 1040px) {
//     margin: 32px 40px 24px;
//   }
// `;
