import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Swal from "sweetalert2";

const Edit = ({ add, submittingStatus }) => {
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

  // function addItem() {
  //   submittingStatus.current = true;
  //   add(function (prev) {
  //     return [{ id: v4(), note, date, time }, ...prev];
  //   });
  // }

  const [item, setItem] = useState(null);

  // Whenever note, date, or time change, update the item state
  useEffect(() => {
    //Only update the item state if note, date or time are not empty
    if (note && date && time) {
      setItem({ id: v4(), note, date, time });
    }
  }, [note, date, time]);

  // This useEffect will now only trigger when the item state changes,
  // which only happens when note, date or time change together
  useEffect(() => {
    if (item) {
      Swal.fire({
        title: '成功！',
        text: '備忘錄新增成功！',
        icon: 'success',
        confirmButtonText: '確定'
      });

      //Add the item to the list
      submittingStatus.current = true;
      add(function (prev) {
        return [item, ...prev];
      });

      //Clear the input fields
      setNote("");
      setDate("");
      setTime("");
      setItem(null);
    }
  }, [item, add, submittingStatus]);

  function addItem() {
    if (!note || !date || !time) {
      Swal.fire({
        title: '錯誤！',
        text: '請輸入事件、日期和時間！',
        icon: 'error',
        confirmButtonText: '確定'
      });
      return;
    } else {
      setItem({ id: v4(), note, date, time });
      // This will trigger the useEffect above
    }
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={handleNoteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={handleDateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={handleTimeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
