import { Button, TableCell, TableRow } from "@mui/material";
import PropTypes from 'prop-types';

const ProductsResults = ({ item }) => {
    return (<>
        <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell sx={{ textAlign: "center" }}>{item.unitsSold !== null ? item.unitsSold : 0}</TableCell>
            <TableCell>{item.refundsAmountPercent.toFixed(2)}</TableCell>
            <TableCell >${item.sales}</TableCell>
            <TableCell sx={{ textAlign: "center" }}>{item.ebayAdsCosts}</TableCell>
            <TableCell sx={{ textAlign: "center" }}>{item.costOfMissingReturns}</TableCell>
            <TableCell>${item.netProfit.toFixed(2)}</TableCell>
            <TableCell>{item.margin.toFixed(2)}%</TableCell>
            <TableCell>{item.roi.toFixed(2)}%</TableCell>
            <TableCell>{item.bsr}</TableCell>
            <TableCell sx={{ margin: "0 auto" }} component={Button}>More</TableCell>
        </TableRow></>);
}

ProductsResults.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        unitsSold: PropTypes.number,
        refundsAmountPercent: PropTypes.number.isRequired,
        sales: PropTypes.number.isRequired,
        ebayAdsCosts: PropTypes.number.isRequired,
        costOfMissingReturns: PropTypes.number.isRequired,
        netProfit: PropTypes.number.isRequired,
        margin: PropTypes.number.isRequired,
        roi: PropTypes.number.isRequired,
        bsr: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductsResults;