import styled from "styled-components";

export default function CreateTitle({
  onChange,
  newTitle,
}) {
  return (
    <div>

      {/* {newTitle.key === toEdit ? (
        <Input
           placeholder='poop'
          type="text"
          onChange={onEditChange}
           value={newTitle.text}
        />
      ) : ( */}
        <Input
          placeholder="List title"
          type="text"
          onChange={onChange}
          value={newTitle.text}
        />
       {/* )} */}
    </div>
  );
}

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
