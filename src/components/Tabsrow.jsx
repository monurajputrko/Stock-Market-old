import '../App.css'
import CardsForData from './CardsForData';
import Filters from './Filters';
import { useData } from '../Context/DataContext';

const DataContainer = () => {

   const { handleSearchResult, setSearch, mainData } = useData(); // Data Came From DataContext

    return (
      <div className="tabsClass">
        {/* Form for Searching */}
        <form
          className="form-inline"
          onSubmit={handleSearchResult}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {/* Input Field for Searching */}
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..."
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginRight: "1rem" }}
          />
          {/* Button for Search button */}
          <button class="btn btn-dark" type="submit">
            Search
          </button>
        </form>

        {/* Components for Filter And Charts */}
        <Filters />
         
        
        {
          mainData.length > 0 && (
            <div className="cardDiv">
              {/* Map for Showing Cards  */}
              {mainData.map((e, i) => {
                return <CardsForData item={e} key={i} />;
              })}
            </div>
          )
        }
      </div>
    );
}

export default DataContainer