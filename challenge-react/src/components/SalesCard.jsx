import { Button, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { getLabel } from "../utils/getLabel";
import { getMonthName } from "../utils/getMonthName"
import PropTypes from 'prop-types';

const SalesCard = ({ data }) => {
    const label = getLabel(data.dateFrom, data.dateTo);
    const dateFromParts = data.dateFrom.split('/');
    const dateToParts = data.dateTo.split('/')
    const monthName = getMonthName(data.dateFrom);

    return (
        <div style={{
            margin: '50px 0 29px 25px',
            width: "80%"
        }}>
            < Card sx={{
                whiteSpace: "nowrap"
            }}>
                <CardHeader
                    title={label.key}
                    subheader={`${dateFromParts[0]}-${dateToParts[0]} ${monthName}`}
                    sx={{ backgroundColor: label.color, color: "#FFFF" }}
                    titleTypographyProps={{
                        variant: 'h6',
                        color: 'inherit'
                    }}
                />
                <CardContent>
                    <div>
                        <Typography variant="body2" color="textSecondary">sales</Typography>
                        <Typography variant="h5" component="div">
                            {data.sales.toLocaleString('en')}
                        </Typography>
                    </div>

                    <Divider sx={{ my: 2 }} />
                    <div>
                        <Typography variant="body2" color="textSecondary">
                            Profit Gross: {data["profit-gross"]}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Profit Net:{data["profit-net"]}
                        </Typography>
                    </div>
                    <Divider sx={{ my: 2 }} />
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <Button sx={{ textAlign: "center" }}> More</Button>

                    </div>
                </CardContent>
            </Card >
        </div >

    );
};

SalesCard.propTypes = {
    data: PropTypes.shape({
        sales: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        "orders-units": PropTypes.string.isRequired,
        refunds: PropTypes.number.isRequired,
        "ad-cost": PropTypes.number.isRequired,
        payout: PropTypes.number.isRequired,
        "profit-gross": PropTypes.number.isRequired,
        "profit-net": PropTypes.number.isRequired,
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string.isRequired,
    }).isRequired,
};

export default SalesCard;