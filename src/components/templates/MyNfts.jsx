import SectionLayout from "../molecules/SectionLayout";
import SectionTop from "../molecules/SectionTop";
import MyItems from "../organism/MyItems";

function MyNfts({ user }) {
  return (
    <SectionLayout>
      <SectionTop title="보유 NFT" showAll="아이템 전체보기" />
      <MyItems metadata={user.result} />
    </SectionLayout>
  );
}

export default MyNfts;
