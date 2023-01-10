import { useEffect, useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const CardWrapper = styled.div`
  border-radius: 16px;
  flex-shrink: 0;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  vertical-align: middle;
  cursor: pointer;
  :hover {
    border: 10px solid yellow;
  }
`;

const InfoBox = styled.div`
  width: 150px;
  height: 73px;
  padding: 16px;
  background-color: #27272a;
`;

const CollectionTitle = styled.div`
  font-size: 15px;
  color: "#FFD121";
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Title = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 14px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default function MyItem({ item }) {
  const { user, setUser } = useAuth();
  const [imgUrl, setImgUrl] = useState("");

  /**
   * image 선택
   * @param {*} item
   */

  const ChangeIpfstoHttp = (item) => {
    useEffect(() => {
      setImgUrl("https://gateway.ipfs.io/ipfs/" + item.image.split("//")[1]);
      return () => {};
    }, []);
    return;
  };

  function selectImage(item) {
    if (!window.confirm("프로필 사진을 변경 하시겠습니까?")) {
    } else {
      console.log(item);
      setUser({ ...user, imageUrl: item.image });
    }
  }

  return (
    <CardWrapper>
      <CardImage
        onClick={() => {
          selectImage(item);
        }}
        src={imgUrl}
      >
        {ChangeIpfstoHttp(item)}
      </CardImage>
      <InfoBox>
        {/* <CollectionTitle>{item.attributes[0].value}</CollectionTitle> */}
        <Title>{item.name}</Title>
      </InfoBox>
    </CardWrapper>
  );
}
