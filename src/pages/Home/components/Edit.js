import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState(""); // [1, setNote]
  function handleNoteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState(""); // [1, setDate]
  function handleDateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState(""); // [1, setTime]
  function handleTimeChange(e) {
    setTime(e.target.value);
  }

  // console.log(note, date, time)

  function addItem() {
    add(function (prev) {
      return [...prev, { id: v4(), note, date, time }];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value="note" onChange={handleNoteChange} />
      <p>日期：</p>
      <input type="date" value="date" onChange={handleDateChange} />
      <p>時間：</p>
      <input type="time" value="time" onChange={handleTimeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
