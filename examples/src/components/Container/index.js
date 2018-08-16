/* eslint-disable */
import React from 'react';
import { Row, Col } from 'antd';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/prism'; 

registerLanguage('jsx', jsx);

export default function (props) {
  return (
    <Row style={{ height: '100vh' }}>
      <Col span={7} style={{ background: 'rgb(245, 242, 240)', height: '100vh', overflow: 'auto' }}>
        <SyntaxHighlighter language="javascript" style={prism}>
          {props.code}
        </SyntaxHighlighter>
      </Col>
      <Col span={17} style={{ height: '100vh' }}>
        <div>
          {props.children}
        </div>
      </Col>
    </Row>
  );
}
/* eslint-enable */
