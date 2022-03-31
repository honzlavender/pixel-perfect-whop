import styled from "styled-components";

export default function MenuButtons({ icon, title }) {

    const handleDelete = () => {
        alert('nasty')
    }

  return (
    <>
      <Body onClick={handleDelete}>
        <Head>{icon}</Head>
        <Head>{title}</Head>
      </Body>
    </>
  );
}

const Body = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  padding: 16px 12px;
  &:hover {
    // background-color: #f4f4f4;
  }
`;

const Head = styled.p`
  color: #242424;
  font-size: 18px;
  font-weight: 600;
  padding: 0 4px;
  margin: 0;
  display: flex;
  line-height: 22px;
`;
