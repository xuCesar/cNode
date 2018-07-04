import React, { Component } from 'react'
import { Row, Col } from 'antd'
import SideNav from '../../components/side'
let arr = []
for (let i = 0; i < 100; i++) {
  arr.push(<li>这是第{i}个li</li>)
}
export class Index extends Component {

  render() {
    return (
      <Row className="wrap" >
        <Col className="indexSider" md={6} xs={0}>
          <SideNav 
            id="indexSideMenu"
            mode="vertical"
          />
        </Col>
        <Col className="indexXsSider" md={0} xs={24}>
          <SideNav 
            id="indexXsSideMenu"
            mode="horizontal"
          />
        </Col>
        <Col className="indexList" md={18} xs={24}>
          {/* {arr} */}
        </Col>
      </Row>
    )
  }
}

export default Index

