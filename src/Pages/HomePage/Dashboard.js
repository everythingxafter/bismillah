import { Col, Container, Row } from "react-bootstrap"
import BodyContainer from "../../Component/BodyContainer"
import FilterBar from "../../Component/FilterBar"

const Dashboard = () => {
    return (
        <BodyContainer>
            <Container className="d-flex gap-2 pt-2" style={{ justifyContent: 'space-between' }}>
                <div>
                    <div><p>Dashboard</p></div>
                </div>
                <FilterBar />
            </Container>
        </BodyContainer>
    )
}

export default Dashboard