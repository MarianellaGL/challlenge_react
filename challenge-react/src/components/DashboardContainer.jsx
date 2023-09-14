import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import { Divider } from '@mui/material';


const DashboardContainer = () => {
    return (<>
        <DashboardHeader />
        <Divider />
        <DashboardContent />
    </>);
}

export default DashboardContainer;