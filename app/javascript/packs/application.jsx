/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'antd/dist/antd.less';

import React from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Button, Radio, Icon, Input, Breadcrumb } from 'antd';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    if (collapsed) {
      $('#main').css('margin-left', '64px')
    } else {
      $('#main').css('margin-left', '200px')
    }
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo"><a href="/">Enclose.IO</a></div>
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['1']}>
            <SubMenu
              key="enclose-io"
              title={<span><Icon type="appstore" /><span className="nav-text">Enclose.IO</span></span>}
            >
              <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout id="main_overlay">
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('sidebar'));

// ReactDOM.render(
// <LocaleProvider locale={enUS}>
//   <Layout style={{ height: '100vh' }}>
//   <Sider collapsible style={{ overflow: 'auto' }}>
//     <div className="logo"><a href="/">Enclose.IO</a></div>
//     <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
//       <Menu.Item key="0">
//         <Icon type="home" />
//         <span className="nav-text">Home</span>
//       </Menu.Item>
//     </Menu>
//   </Sider>
// </Layout>
// </LocaleProvider>, document.getElementById('sidebar'));
