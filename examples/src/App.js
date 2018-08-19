import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import menuData from './menuData';
import route from './router';

const {
  Content, Sider,
} = Layout;

const { SubMenu } = Menu;

const App = () => (
  <Router basename="/examples">
    <Layout>
      <Sider style={{
        overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
      }}
      >
        <Menu theme="dark" mode="inline">
          {
            menuData.map((item, index) => (
              <SubMenu
                title={item.text}
                key={index}
              >
                {
                  item.children.map((child, idx) => (
                    <Menu.Item key={`${index}_${idx}`}>
                      <Link to={child.path}>
                        {child.text}
                      </Link>
                    </Menu.Item>
                  ))
                }
              </SubMenu>
            ))
          }
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200, overflow: 'hidden', height: '100vh' }}>
        <Content>
          { route() }
        </Content>
      </Layout>
    </Layout>
  </Router>
);

export default App;
