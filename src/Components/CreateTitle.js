import styled from "styled-components";

export default function CreateTitle({ onChange, newTitle, setEditingText }) {
  return (
    //conditional input for new state and updating state
    //currently set to new state only
    <div>
      <Input
        placeholder="List title"
        type="text"
        onChange={onChange}
        // onChange={() => setEditingText(newTitle.key)}
        value={newTitle.text}
      />
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
