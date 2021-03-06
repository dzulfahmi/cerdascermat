import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText,
  Input, Button } from 'reactstrap';
import { inject, observer } from 'mobx-react';

@inject('pointStore')
@observer
class Point extends React.Component {

  increment = (x) => {
    switch (x) {
      case 1:
        this.props.pointStore.incPoint1();
        break;
      case 2:
        this.props.pointStore.incPoint2();
        break;
      case 3:
        this.props.pointStore.incPoint3();
        break;
      case 4:
        this.props.pointStore.incPoint4();
        break;
      default:
        break;
    }  
  }  

  decrement = (x) => {
    switch (x) {
      case 1:
        this.props.pointStore.decPoint1();
        break;
      case 2:
        this.props.pointStore.decPoint2();
        break;
      case 3:
        this.props.pointStore.decPoint3();
        break;
      case 4:
        this.props.pointStore.decPoint4();
        break;
      default:
        break;
    }  
  }  

  onChangeVal1 = (e) => {
    e.preventDefault();
    this.props.pointStore.setVal1(e.target.value);
  }

  onChangeVal2 = (e) => {
    e.preventDefault();
    this.props.pointStore.setVal2(e.target.value);
  }

  onChangeVal3 = (e) => {
    e.preventDefault();
    this.props.pointStore.setVal3(e.target.value);
  }

  onChangeVal4 = (e) => {
    e.preventDefault();
    this.props.pointStore.setVal4(e.target.value);
  }

  render() {
    let { point1, point2, point3, point4, val1, val2, val3, val4 } = this.props.pointStore;
    console.log("isi props", this.props);
    return (
    <>
      <Container className="bg-secondary" fluid>
        <Row className="my-2">
          <Col xl="3" lg="3" sm="3" className="my-3">
            <Card body>
              <CardTitle><p className="text-center h2">ABU BAKAR</p></CardTitle>
              <CardText><p className="text-center display-1">{point1}</p></CardText>
            </Card>
          </Col>
          <Col xl="3" lg="3" sm="3" className="my-3">
            <Card body>
              <CardTitle><p className="text-center h2">UMAR</p></CardTitle>
              <CardText><p className="text-center display-1">{point2}</p></CardText>
            </Card>
          </Col>
          <Col xl="3" lg="3" sm="3" className="my-3">
            <Card body>
              <CardTitle><p className="text-center h2">USMAN</p></CardTitle>
              <CardText><p className="text-center display-1">{point3}</p></CardText>
            </Card>
          </Col>
          <Col xl="3" lg="3" sm="3" className="my-3">
            <Card body>
              <CardTitle><p className="text-center h2">ALI</p></CardTitle>
              <CardText><p className="text-center display-1">{point4}</p></CardText>
            </Card>
          </Col>
        </Row>  
        <Row>
          <Col xl="3" lg="3" sm="3" className="my-3 text-center">
            <Row>
              <Col sm={2}>
                <Button color="danger" className="h1" type="button" onClick={() => this.decrement(1)}>-</Button>
              </Col>
              <Col sm={6}>
                <Input  type="text" name="group1" id="group1" placeholder="0" value={val1} onChange={this.onChangeVal1} />
              </Col>
              <Col sm={2}>
                <Button color="success" className="h1" type="button" onClick={() => this.increment(1)}>+</Button>
              </Col>
            </Row>
          </Col>  
          <Col xl={3} lg={3} sm={3} className="my-3 text-center">
            <Row>
              <Col sm={2}>
                <Button color="danger" className="h1" type="button" onClick={()=>this.decrement(2)}>-</Button>
              </Col>
              <Col sm={6}>
                <Input  type="text" name="group2" id="group2" placeholder="0" value={val2} onChange={this.onChangeVal2} />
              </Col>
              <Col sm={2}>
                <Button color="success" className="h1" type="button" onClick={()=>this.increment(2)}>+</Button>
              </Col>
            </Row>
          </Col>  
          <Col xl={3} lg={3} sm={3} className="my-3 text-center">
            <Row>
              <Col sm={2}>
                <Button color="danger" className="h1" type="button" onClick={()=>this.decrement(3)}>-</Button>
              </Col>
              <Col sm={6}>
                <Input  type="text" name="group3" id="group3" placeholder="0" value={val3} onChange={this.onChangeVal3} />
              </Col>
              <Col sm={2}>
                <Button color="success" className="h1" type="button" onClick={()=>this.increment(3)}>+</Button>
              </Col>
            </Row>
          </Col>  
          <Col xl={3} lg={3} sm={3} className="my-3 text-center">
            <Row>
              <Col sm={2}>
                <Button color="danger" className="h1" type="button" onClick={()=>this.decrement(4)}>-</Button>
              </Col>
              <Col sm={6}>
                <Input  type="text" name="group4" id="group4" placeholder="0" value={val4} onChange={this.onChangeVal4} />
              </Col>
              <Col sm={2}>
                <Button color="success" className="h1" type="button" onClick={()=>this.increment(4)}>+</Button>
              </Col>
            </Row>
          </Col>  
        </Row>
      </Container></>
    )
  }  
}

export default Point;