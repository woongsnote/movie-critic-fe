import tw from "tailwind-styled-components/";
import Swal from "sweetalert2";
import { getRate } from "utils/utils";
import useChallengeItem from "./useChallengeItem";

const ChallengeItem = ({ id, icon, name }) => {
  const {
    isLoading,
    error,
    isError,
    data: challengeDetail,
  } = useChallengeItem({ badgeId: id });

  let rate = 0;

  if (isLoading) {
    rate = 0;
  } else if (isError) {
    rate = error.message;
  } else {
    rate = getRate(
      challengeDetail.data[0].badgeTotal,
      challengeDetail.data[0].memberTotal
    );
  }

  const showChallengeDetailModal = () => {
    Swal.fire({
      html: `
      <div class="flex flex-col gap-2">
        <span class="text-5xl m-2 p-2">${icon}</span>
        <h2 class="text-2xl text-black font-semibold">${name}</h2>
        <p>${challengeDetail.data[0].badgeInfo}</p>
        <div class="w-full flex items-center justify-center">
          <p class="w-2/3 text-lg font-extrabold text-yellow-500 bg-amber-50 my-2 rounded-lg"><span class="text-xl">${rate}</span>의 사용자가 획득했습니다.</p>
        </div>
      </div>
      `,
      buttonsStyling: false,
      showConfirmButton: true,
      confirmButtonText: "확인",
      customClass: {
        confirmButton:
          "bg-yellow-500 focus:outline-none px-4 py-2 text-mGray rounded-md",
      },
    });
  };

  return (
    <ChallengeItemContainer>
      <ChallengeBadgeBox onClick={showChallengeDetailModal}>
        <ChallengeBadgeIcon>{icon}</ChallengeBadgeIcon>
      </ChallengeBadgeBox>
      <ChallengeBadgeTitle>{name}</ChallengeBadgeTitle>
    </ChallengeItemContainer>
  );
};

const ChallengeItemContainer = tw.div`
flex justify-around  p-2 items-center md:mx-4  min-w-max flex-col 
`;

const ChallengeBadgeBox = tw.div`
border border-mWhite bg-mWhite border-solid  flex items-center rounded-lg cursor-pointer w-20 h-20 justify-center
`;

const ChallengeBadgeIcon = tw.span`
  text-5xl p-1
`;

const ChallengeBadgeTitle = tw.span`
text-sm  w-full text-start font-bold text-center text-mWhite mt-2 md:text-lg
`;

export default ChallengeItem;
