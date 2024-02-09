import Item from "./Item";

const List = ({ listData, deleteData }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            noteData={note}
            dateData={date}
            timeData={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
