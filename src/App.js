import './App.css';
import React, { useState } from "react";
import PhoneBookForm from "./form";
import InformationTable from "./table";

function App() {
  const [dataList, setDataList] = useState([]);

  function addEntryToPhoneBook(data) {
    setDataList([...dataList,data]);
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable dataList={dataList} />
    </section>
  );
}

export default App;
