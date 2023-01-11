import SectionLayout from "../molecules/SectionLayout";
import SectionTop from "../molecules/SectionTop";
import MyItems from "../organism/MyItems";

function MyNfts({ data }) {
  return (
    <SectionLayout>
      <SectionTop title="보유 NFT" showAll="아이템 전체보기" />
      <MyItems data={data} />
    </SectionLayout>
  );
}

export default MyNfts;
