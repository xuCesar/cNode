import React, { Component } from 'react'
import { Layout, Divider, Row, Col, Icon, Dropdown, Button} from 'antd'
import Nav from '../nav'


export class Header extends Component {
  render() {
    return (
        <Layout.Header>
            <Row className="wrap">
                <Col md={6} xs={24}>
                    <h1 id="logo">cNode</h1>
                </Col>
                <Col md={18} xs={0}>
                    <Divider className="headerDivider" type="vertical"></Divider>
                    <Nav
                        id="nav"
                        mode="horizontal"
                    ></Nav>
                </Col>
                <Col className="xsNav" md={0} xs={24} >
                    <Dropdown 
                        overlay={
                            <Nav id="xsNav" mode="vertical" />
                        } 
                        trigger={["click", "touchend"]}
                        placement="bottomRight"
                    >
                        <Button><Icon type="bars" /></Button>
                    </Dropdown>
                </Col>
            </Row>
        </Layout.Header>
    )
  }
}

export default Header
