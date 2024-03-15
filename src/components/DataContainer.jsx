import "../App.css";
import CardsForData from "./CardsForData";
import Filters from "./Filters";
import { useData } from "../Context/DataContext";

const DataContainer = () => {
  const { handleSearchResult, setSearch, mainData } = useData(); // Data Came From DataContext

  return (
    <div className="tabsClass">
      {/* Form for Searching */}
      <form
        className="form-inline"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {/* Input Field for Searching */}
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..."
          aria-label="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{ marginRight: "1rem" }}
        />
        {/* Button for Search button */}
        <button onClick={()=>{handleSearchResult();}} class="btn btn-dark">
          Search
        </button>
      </form>
    <br />
      {/* Components for Filter And Charts */}
      <Filters />

      {mainData.length > 0 && (
        <div class="ag-format-container">
          {/* Map for Showing Cards  */}
          {/* {mainData.map((e, i) => { */}
          <CardsForData item={mainData} />;{/* })} */}
        </div>
      )}
    </div>
  );
};

export default DataContainer;
