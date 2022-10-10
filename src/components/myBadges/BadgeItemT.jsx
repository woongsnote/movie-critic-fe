import Swal from "sweetalert2";

const BadgeItemT = ({ id, icon, name, description, isActive }) => {
  const onClickBadgeHandler = () => {
    showModal();
  };

  const showModal = () => {
    Swal.fire({
      html: `
      <div class="flex flex-col gap-2">
        <span class="text-5xl m-2 p-2">${icon}</span>
        <h2 class="text-2xl text-black font-semibold">${name}</h2>
        <p>${description}</p
      </div>
      `,
      showCancelButton: true,
      confirmButtonText: "대표 배지 설정",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
      }
    });
  };

  return (
    <div>
      {isActive === true ? (
        <div
          className="w-20 h-20 bg-mWhite rounded-xl py-4 flex justify-center items-center m-2 cursor-pointer"
          onClick={onClickBadgeHandler}
        >
          <span className="text-4xl">{icon}</span>
        </div>
      ) : (
        <div className="w-20 h-20 bg-mGray border-solid border-mWhite border rounded-xl py-4 flex justify-center items-center m-2 cursor-default">
          <span className="text-gray grayscale text-4xl">{icon}</span>
        </div>
      )}
    </div>
  );
};

export default BadgeItemT;
