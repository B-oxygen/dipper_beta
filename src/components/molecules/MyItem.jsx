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
  width: 500px;
  height: 200px;
  padding: 16px;
  background-color: pink;
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

export default function MyItem({ data, metadata }) {
  const { user, setUser } = useAuth();
  const [imgUrl, setImgUrl] = useState("");
  const [php, setPhp] = useState("");
  const imageURL = metadata.image;

  /**
   * image 선택
   * @param {*} item
   */

  useEffect(() => {
    if (imageURL.indexOf("ipfs://") > -1) {
      const convertedIpfsUrl =
        "https://ipfs.io/ipfs/" + imageURL.split("ipfs://")[1];
      return setPhp(convertedIpfsUrl), setImgUrl(convertedIpfsUrl);
    }
    return setImgUrl(imageURL), setPhp(imageURL);
  }, []);

  function selectImage(metadata) {
    if (!window.confirm("프로필 사진을 변경 하시겠습니까?")) {
    } else {
      console.log(metadata);
      setUser({ ...user, imageUrl: metadata.image });
      setPhp(imgUrl);
    }
  }

  return (
    <CardWrapper>
      <CardImage
        onClick={() => {
          selectImage(metadata);
        }}
        src={imgUrl}
      ></CardImage>
      <InfoBox>
        {/* <CollectionTitle>{item.attributes[0].value}</CollectionTitle> */}
        <Title>{metadata.name}</Title>
      </InfoBox>
      <CardImage src={php} />
      <InfoBox>
        <h1>userInfo</h1>
        <CollectionTitle>ownerAddress : {user.account}</CollectionTitle>
        <Title>{metadata.name}</Title>
      </InfoBox>
    </CardWrapper>
  );
}
