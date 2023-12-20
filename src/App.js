import "./styles.css";
import { SearchBar } from "./components/search";
import { Button } from "./components/button";
import { Row } from "./components/row";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ApiData,
  getFilteredData,
  deleteGroupData
} from "./storedata/checkedbox/checkedbox";
import { Pagination } from "./pagination/pagination";

export default function App() {
  let data = useSelector((state) => state.rd1.data);
  const temp = useSelector((state) => state.rd1.tempData);
  const dispatch = useDispatch();
  const url =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  let pagination = null;

  useEffect(() => {
    async function fetchData() {
      dispatch(await ApiData(url));
    }
    fetchData();
  }, [dispatch]);

  if (data != null) {
    pagination = (
      <Pagination data={data} RenderComponent={Row} dataLimit={10} />
    );
  }

  const filterData = async (userInput) => {
    if (userInput.length === 0) {
      data = temp;
    }
    dispatch(await getFilteredData(userInput, data));
  };

  return (
    <div className="App">
      <div className="heading3">
        <h3>Admin UI</h3>
      </div>
      <SearchBar
        class="search"
        id="filter"
        change={(event) => filterData(event.target.value)}
      />
      <div id="footer">
        <Button
          class="button"
          id="deleteSelected"
          click={() => dispatch(deleteGroupData(data))}
          name="Delete Selected"
        />
      </div>
      {pagination}
    </div>
  );
}
