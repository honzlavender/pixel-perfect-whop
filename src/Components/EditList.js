import styled from "styled-components";
import ArrowIcon from "../iconComponents/arrowIcon";
// import CreateTitle from "./CreateTitle";
import { useNavigate } from "react-router-dom";

export default function EditList({
  submitEdit,
  newTitle,
  onChange
}) {
  const navigate = useNavigate();
  const nav = () => {
    navigate({
      pathname: "/",
    });
  };
//   console.log(newTitle.text)

  return (
    <>
      <Body>
        <Head onClick={nav}>
          <p
            style={{
              margin: 0,
              padding: 0,
              display: "flex",
              textAlign: "center",
            }}
          >
            <ArrowIcon />
          </p>
          <p
            style={{
              margin: 0,
              padding: "2px 0 0 4px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Cancel
          </p>
        </Head>
          <Head onClick={() => submitEdit(newTitle.key)}>
            wow
          </Head>
      </Body>
      <Input
           placeholder={newTitle.text}
          type="text"
          onChange={onChange}

        />
      {/* <CreateTitle
        newTitle={newTitle}
        onChange={onChange}
        toEdit={toEdit}
        onEditChange={onEditChange}
      /> */}
    </>
  );
}

const Body = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 24px 24px;
  @media (min-width: 1040px) {
    margin: 32px 40px 24px;
  }
`;

const Head = styled.button`
  display: flex;
  align-items: center;
  color: #505050;
  fill: #505050;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background-color: #fff;
  &:hover {
    color: #2fe6ff;
    fill: #2fe6ff;
  }
  &:active {
    color: #242424;
  }
`;



const Input = styled.input`
  outline: none;
  border: none;
  font-size: 28px;
  font-weight: 600;
  color: #242424;
  margin: 0px 24px 24px;
  @media (min-width: 1040px) {
    margin: 32px 40px 24px;
  }
`;
