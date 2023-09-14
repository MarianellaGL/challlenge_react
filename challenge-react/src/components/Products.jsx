import { useContext, useState } from 'react';
import data from '../mockups/entries.json';
import { Tab, Tabs, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@mui/material';
import { SearchBarContext } from '../context/SearchBarContext';
import ProductsResults from './ProductResults';


const Products = () => {
    const { searchTerm } = useContext(SearchBarContext);
    const [tabValue, setTabValue] = useState(0);
    console.log(searchTerm)
    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };


    return (
        <div>
            <h2>Month to Date</h2>

            <Tabs
                value={tabValue}
                onChange={handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Products" />
                <Tab label="Items" />
            </Tabs>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Units Sold</TableCell>
                            <TableCell>Refunds</TableCell>
                            <TableCell>Sales</TableCell>
                            <TableCell>Ads</TableCell>
                            <TableCell>Sellable returns</TableCell>
                            <TableCell>net Profit</TableCell>
                            <TableCell>Margin</TableCell>
                            <TableCell>ROI</TableCell>
                            <TableCell>BSR</TableCell>
                            <TableCell>info</TableCell>
                        </TableRow>
                    </TableHead>

                    {searchTerm ? (
                        <TableBody>

                            {data.entries
                                .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                .map((item) => {
                                    return <ProductsResults key={item.id} item={item} />

                                }
                                )}
                        </TableBody>
                    ) :
                        <TableBody>
                            {data.entries
                                .map((item) => {
                                    return <ProductsResults key={item.id} item={item} />
                                })}
                        </TableBody>
                    }
                </Table>
            </TableContainer>
        </div>
    );
};

export default Products;