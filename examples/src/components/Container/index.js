/* eslint-disable */
import React from 'react';
import { Row, Col } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

export default function (props) {
  return (
    <Row style={{ height: '100vh' }}>
      <Col span={7} style={{ background: '#f8f8fe', height: '100vh', overflow: 'auto' }}>
        <SyntaxHighlighter language="javascript" style={docco}>
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
