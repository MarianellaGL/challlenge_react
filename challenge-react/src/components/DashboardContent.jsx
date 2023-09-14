import SalesCard from "./SalesCard";
import SearchBar from "./SearchBar";
import sales from "../mockups/sales.json";
import Products from "./Products";

const DashboardContent = () => {
    return (<>
        <SearchBar />
        <div style={{ display: 'flex', margin: "50px" }} >
            {
                sales.map((data, index) => {
                    return < SalesCard key={index} data={data} />
                })
            }
        </div >
        <div style={{ marginLeft: "100px", width: "90%" }}>
            <Products />

        </div>
    </>);
}

export default DashboardContent;