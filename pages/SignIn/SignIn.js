import React, { Component } from 'react'

import { AccountContext } from '../Context/Context';


class SignIn extends Component {


    render() {
        const { clients, account } = this.context;




        return (
            <AccountContext.Consumer>{(accountContext) => {
                const { switchToSignUp } = accountContext
                return (
                    <div className="signIn-container">
                        <h2>Đăng Nhập</h2>
                        <div className="login-name">
                            <i class="fas fa-user"></i>
                            <input type="text" name id="loginName" placeholder="Email hoặc Số điện thoại" />
                        </div>
                        <div className="login-password">
                            <i class="fas fa-unlock-alt"></i>
                            <input type="password" name id="loginPassword" placeholder="Mật khẩu" />
                        </div>
                        <div id="error-area"></div>
                        <div className="btn-area">
                            <button>Đăng nhập</button>
                        </div>

                        <div className="optional">
                            <span>Bạn chưa có tài khoản ?</span>
                            <span className="direct" onClick={switchToSignUp}>Đăng ký</span>
                        </div>
                    </div>
                )

            }}
            </AccountContext.Consumer>



        );


    }
}
export default SignIn;

