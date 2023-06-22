import NavbarHome from "../Component/NavbarHome"
import NavbarStatus from "../Component/NavbarStatus"
import Dashboard from "./HomePage/Dashboard"

const HomePage = () => {
    return (
        <>
            <NavbarHome />
            <NavbarStatus />
            <Dashboard />
        </>
    )
}

export default HomePage