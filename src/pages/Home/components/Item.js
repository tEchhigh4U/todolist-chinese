import Swal from "sweetalert2";

const Item = ({
  id,
  noteData,
  dateData,
  timeData,
  deleteData,
  submittingStatus,
}) => {
  function handleDeleteChange() {
    Swal.fire({
      title: "你確定嗎？",
      text: "你將無法恢復此檔案！",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "取消",
      confirmButtonText: "是的，刪除它！",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "刪除成功！",
          text: "你的檔案已經被刪除。",
          icon: "success",
        });

        submittingStatus.current = true;
        deleteData((prev) => {
          return prev.filter((item) => item.id !== id);
        });
      }
    });
  }

  return (
    <div className="item">
      <div>
        <p>{noteData}</p>
        <p>
          建立於 {`${dateData}`}，時間在 {`${timeData}`}
        </p>
      </div>
      <button onClick={handleDeleteChange} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;
