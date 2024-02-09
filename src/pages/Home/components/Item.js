const Item = ({
  id,
  noteData,
  dateData,
  timeData,
  deleteData,
  submittingStatus,
}) => {
  function handleDateChange() {
    submittingStatus.current = true;
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p>{noteData}</p>
        <p>created at: {`${dateData}, ${timeData}`}</p>
      </div>
      <button onClick={handleDateChange} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;
