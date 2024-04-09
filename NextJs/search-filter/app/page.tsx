"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Data {
  id: number;
  title: string;
}

const Home = () => {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setFilterData(data);
        });

      return res;
    };

    getData();
  }, []);

  useEffect(() => {
    const filterVal = data.filter((item: Data) =>
      item.title.toLowerCase().includes(inputVal.toLowerCase())
    );

    setFilterData(filterVal);
  }, [data, inputVal]);

  return (
    <main className="py-4  flex items-center justify-center gap-8 flex-col">
      <div>
        <input
          type="search"
          name="search"
          className="border"
          placeholder="Search here..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mb-4">Total Items {filterData?.length}</h1>

        {filterData.map((data: Data) => (
          <div
            key={data.id}
            className="flex items-center justify-center gap-4">
            <h4>{data.title}</h4>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
