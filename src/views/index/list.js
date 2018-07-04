import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar, Tag } from 'antd'
import data from './data'

export class IndexList extends Component {
  render() {
    console.log(data.data);
    
    return (
        <List
            loading = {false}
            dataSource = {data.data}
            renderItem = {item => (
            <List.Item
              actions = {
                ['回复：' + item.reply_count ,
                 '访问：' + item.visit_count]
              }
            >
              <List.Item.Meta 
                avatar = { <Avatar src={item.author.avatar_url} /> }
                title = {<Link to={"/details/" + item.id}>{item.title}</Link>}
                description = { 
                  <p>
                    <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                    发表于：{item.create_at.split('T')[0]}
                  </p> }
              />
            </List.Item>
            )}
        ></List>
    )
  }
}

export default IndexList
