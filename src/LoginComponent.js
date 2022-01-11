import React from 'react';
import axios from 'axios';
import cover from './img/cover.jpg';
import login1 from './img/login2.jpeg';
import cover1 from './img/cover3.jpg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class LoginComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                var response = await axios.post(
                    'https://backend-integra.herokuapp.com/register/login', {
                    password: this.state.password,
                    email: this.state.email
                })
                if (response.data) {
                    await localStorage.setItem('token', response.data);
                    this.props.history.push('/Books');
                }
            } catch (err) {
                console.warn(err)
            }
        }
        return (
            <>
                <div >
                    <img src={cover} title='cover' />
                    <div style={{ padding: '20px' }} className='coverone'>
                        <div className='covertwo'>
                        <div className='image'>
                            <img src={login1} title='login'/>
                        </div>
                        <div className='formback'>
                        <form onSubmit={(e) => handleSubmit(e)} className='form'>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label" id='email'>Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="email" name="email" value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })} />
                                
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label" id='password'>Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" type="password" name="password" value={this.state.password}
                                    onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                        </div>
                        </div>

                    </div>
                    <img src={cover1} title='cover' className='cover2'/>
                </div>
                <footer className='footer'>
                    <p>Designed by Devan G, <b>@Copyright 2022</b></p>
                </footer>
            </>
        )
    }
}

export default LoginComponent;
