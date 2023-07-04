import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
export default function Form(){
    return(
        <Form form="{form}" name="dynamic_rule" style={{ maxWidth: 600 }}>
            <Form.Item
                {...formItemLayout}
                name="username"
                label="Name"
                rules={[{ required: true, message: 'Please input your name' }]}
            ></Form.Item>
        </Form>
    );
}