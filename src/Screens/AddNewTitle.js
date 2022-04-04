import styled from "styled-components";
import ArrowIcon from "../iconComponents/arrowIcon";
import CreateTitle from "../Components/CreateTitle";
import { useNavigate } from "react-router-dom";

export default function AddNewTitle({
  onChange,
  onSubmit,
  newTitle,
  list,
  setEditingText,
  // isEditing,
  // submitEdits,
}) {
  const navigate = useNavigate();
  const nav = () => {
    navigate({
      pathname: "/",
    });
  };
  return (
    <>
      <form>
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
          {/* try adding conditional Done button - onSubmit? onEdit? */}

          {/* {newTitle.key === isEditing ? (
            <Head type="submit" onClick={submitEdits}>
              edit
            </Head>
          ) : ( */}
          <Head type="submit" onClick={onSubmit}>
            Done
          </Head>
          {/* )} */}
        </Body>
        <CreateTitle
          newTitle={newTitle}
          onChange={onChange}
          list={list}
          setEditingText={setEditingText}
        />
      </form>
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
