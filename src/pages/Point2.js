import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText,
  Input, Button } from 'reactstrap';
import { inject, observer } from 'mobx-react';

@inject('pointStore')
@observer
class Point extends React.Component {
  state = {
    point1: 0,
    point2: 0,
    point3: 0,
    point4: 0,
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0
  }  
  decrement = (x) => {
    if (x === 1 || x === "1"){
      let val = this.state.point1 - parseInt(this.state.val1);
      this.setState({point1: val});  
    } else if (x === 2 || x === "2"){
      let val = this.state.point2 - parseInt(this.state.val2);
      this.setState({point2: val});
    } else if (x === 3 || x === "3") {
      let val = this.state.point3 - parseInt(this.state.val3);
      this.setState({point3: val});  
    } else if (x === 4 || x === "4") {
      let val = this.state.point4 - parseInt(this.state.val4);
      this.setState({point4: val});
    }
  }  

  increment = (x) => {
    switch (x) {
      case 1:
        let val = this.state.point1 + parseInt(this.state.val1);
        this.setState({point1: val});
        this.props.pointStore.setPoint1(val);
        break;
      case 2:
        let val2 = this.state.point2 + parseInt(this.state.val2);
        this.setState({point2: val2});
        this.props.pointStore.setPoint2(val2);
        break;
      case 3:
        let val3 = this.state.point3 + parseInt(this.state.val3);
        this.setState({point3: val3});
        this.props.pointStore.setPoint3(val3);
        break;
      case 4:
        let val4 = this.state.point4 + parseInt(this.state.val4);
        this.setState({point4: val4});
        this.props.pointStore.setPoint4(val4);
        break;
      default:
        break;
    }  
  }  

  onChangeVal1 = (e) => {
    e.preventDefault();
    this.setState({val1: e.target.value})
  }

  onChangeVal2 = (e) => {
    e.preventDefault();
    this.setState({val2: e.target.value})
  }

  onChangeVal3 = (e) => {
    e.preventDefault();
    this.setState({val3: e.target.value})
  }

  onChangeVal4 = (e) => {
    e.preventDefault();
    this.setState({val4: e.target.value})
  }

  render() {
    let { point1, point2, point3, point4 } = this.props.pointStore;
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
                <Input  type="text" name="group1" id="group1" placeholder="0" value={this.state.val1} onChange={this.onChangeVal1} />
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
                <Input  type="text" name="group2" id="group2" placeholder="0" value={this.state.val2} onChange={this.onChangeVal2} />
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
                <Input  type="text" name="group3" id="group3" placeholder="0" value={this.state.val3} onChange={this.onChangeVal3} />
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
                <Input  type="text" name="group4" id="group4" placeholder="0" value={this.state.val4} onChange={this.onChangeVal4} />
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