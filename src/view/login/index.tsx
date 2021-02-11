import { useState } from 'react';
import { Clock } from '../../components/Clock';
import { Containor, Wrap, LoginInfo, LoginInfoItem } from './styled';

function Login(props: { history: any; }) {
    console.log(props);
    let {history} = props;
    let [loading, setLoading] = useState(false);

    const login = () => {
        setLoading(true);
        new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        })
        .then(() => {
            setLoading(false);
            history.push('/dashboard');
        })
        .catch(() => {
            setLoading(false);
        })
    }

    return (
        <Containor>
            <div className="clock-login-wrap">
                <Clock />
            </div>
            <Wrap>
                <div className="g-login-wrap-containor">
                    <LoginInfo className="TopMargin">
                        <LoginInfoItem>
                            <input type="text" placeholder="用户名" />
                        </LoginInfoItem>

                        <LoginInfoItem>
                            <input type="password" placeholder="密&nbsp;&nbsp;&nbsp;&nbsp;码" />
                        </LoginInfoItem>

                        <LoginInfoItem className="betweenBox">
                            <button className="largeBtn" onClick={login}>{loading ? '登录中...':'登录'}</button>
                        </LoginInfoItem>
                    </LoginInfo>
                </div>
            </Wrap>
        </Containor>
    )
}

export default Login
