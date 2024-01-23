import './loginstyle.css';
import user_icon from '../../assets/login/person.png';
import email_icon from '../../assets/login/email.png';
import pwd_icon from '../../assets/login/password.png';
import {useState} from "react";
const Login = () => {

    const [action, setAction] = useState("로그인");




    return (
        <div className='container'>

            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">

                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="user" placeholder="아이디"/>
                </div>

                <div className="input">
                    <img src={pwd_icon} alt=""/>
                    <input type="password" placeholder="비밀번호"/>
                </div>

                {action === "로그인" ? <div></div> :
                    <div className="input">
                    <img src={pwd_icon} alt=""/>
                    <input type="password" placeholder="비밀번호 확인"/>
                </div>}

                {action === "로그인" ? <div></div> :
                    <div className="input">
                        <div className="email-input">
                            <img src={email_icon} alt=""/>
                            <input type="email" placeholder="이메일"/>
                        </div>
                    </div>
                }

                {action === "로그인" ? <div></div> :
                    <button className="verify-email"><span>이메일 인증</span></button>
                }


            </div>

            {action === "회원가입" ? <div></div> : <div className="forgot-password"><span>비밀번호 찾기</span></div>}


            <div className="submit-container">
            <button className={action === "로그인" ? "submit gray": "submit"} onClick={() => {setAction("회원가입")}}>가입</button>
                <button className={action === "회원가입" ? "submit gray": "submit"} onClick={() => {setAction("로그인")}}>로그인</button>
            </div>

        </div>
    )
}

export default Login