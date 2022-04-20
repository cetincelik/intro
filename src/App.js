import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  let ProductInfo = { title: "Product List" };
  let CategoryInfo = { title: "Category List" };
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={CategoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={ProductInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
