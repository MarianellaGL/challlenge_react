import './App.css'
import CustomDrawer from './components/CustomDrawer'
import DashboardContainer from './components/DashboardContainer'
import SearchBarContextProvider from './context/SearchBarContext'

function App() {

  return (
    <>
      <SearchBarContextProvider>
        <CustomDrawer />
        <DashboardContainer />
      </SearchBarContextProvider>

    </>
  )
}

export default App
