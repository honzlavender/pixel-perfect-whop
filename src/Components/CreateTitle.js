import styled from "styled-components";

export default function CreateTitle({ onChange, newTitle }) {


  return (
    <Input
      placeholder="List title"
      type="text"
      onChange={onChange}
      value={newTitle}
    />
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
`