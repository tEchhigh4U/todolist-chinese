const Item = ({ noteData, dateData, timeData }) => {
  return (
    <div className="item">
      <div>
        <p>{noteData}</p>
        <p>created at: {dateData}</p>
      </div>

      <button className="remove">刪除</button>
    </div>
  );
};

export default Item;
