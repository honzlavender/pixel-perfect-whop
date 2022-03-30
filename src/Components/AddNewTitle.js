import styled from "styled-components";
import ArrowIcon from "../iconComponents/arrowIcon";
import CreateTitle from "./CreateTitle";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddNewTitle() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  const changeHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setNewTitle(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!newTitle) {
      alert("OOPS");
    } else {
      setList((prevList) => {
        return [{ value: newTitle }, ...prevList];
      });
    }
    navigate({
      pathname: "/",
      state: {
        newTitle,
      },
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
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

          <Head type="submit">Done</Head>
        </Body>
        <CreateTitle input={newTitle} changeHandler={changeHandler} />
      </form>

      <ul>
        {list.map((item) => {
          return (
            <div>
              <li>
                {/* <li key={item.key}>  */}
                {item.value}
              </li>
            </div>
          );
        })}
      </ul>
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
