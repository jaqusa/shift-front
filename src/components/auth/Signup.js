import React, { Fragment } from 'react'
import { Form,Select,Icon, Input, Button } from 'antd'

const FormItem = Form.Item;
const { Option } = Select;

const Signup = ({ handleInput, handleSignup, handleSelect }) => {
    return (
        <Fragment>
            <div>
                <h1 style={{ textAlign: 'center' }}>SIGNUP</h1>
                <div className="d-flex">
                    <Form layout="vertical" onSubmit={handleSignup}>
                        <FormItem
                        >
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={handleInput} placeholder="Email" name="email" />
                        </FormItem>
                        <FormItem
                        >

                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={handleInput} type="password" placeholder="Password" name="password" />
                        </FormItem>
                        <Form.Item>

                            <Select
                              name="usertype"
                              placeholder="Type of account "
                              onChange={handleSelect}
                            >
                              <Option value="user">User</Option>
                              <Option value="agent">Agent</Option>
                            </Select>
                          
                        </Form.Item>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Signup
                    </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}

export default Signup
