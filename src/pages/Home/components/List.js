import Item from "./Item";

const List = ({ listData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time } = item;
        return (
          <Item key={id} noteData={note} dateDate={date} timeData={time} />
        );
      })}
    </div>
  );
};

export default List;
