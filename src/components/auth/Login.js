import React, { Fragment } from 'react'
import { Form, Icon, Input, Button } from 'antd'

const FormItem = Form.Item;

const Login = ({ handleLogin, handleInput }) => {
    return (
        <Fragment>
            <div>
                <h1 style={{ textAlign: 'center' }}>LOGIN</h1>
                <div className="d-flex">
                    <Form layout="vertical" onSubmit={handleLogin}>
                        <FormItem
                        >
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={handleInput} placeholder="Email" name="email" />
                        </FormItem>
                        <FormItem
                        >

                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={handleInput} type="password" placeholder="Password" name="password" />
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Login
                    </Button>
            
                        </FormItem>
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
