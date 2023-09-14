import { Button, Typography } from "@mui/material";

const DashboardHeader = () => {
    return (
        <div style={{ margin: "20px 70px 20px 100px", display: "flex", alignItems: "center" }}>
            <Typography variant="h4">Dashboard</Typography>
            <Button variant="outlined" color="primary" style={{ marginLeft: "10px", color: "gray", border: "1px solid gray" }}>
                Title
            </Button>
            <Button variant="outlined" color="primary" style={{ marginLeft: "10px", color: "gray", border: "1px solid gray" }}>
                Charts
            </Button>
            <Button variant="outlined" color="primary" style={{ marginLeft: "10px", color: "gray", border: "1px solid gray" }}>
                P&L
            </Button>
            <Button variant="outlined" color="primary" style={{ marginLeft: "10px", color: "gray", border: "1px solid gray" }}>
                Trends
            </Button>

        </div>
    );
};

export default DashboardHeader