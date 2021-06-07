import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    onSubmitSignIn = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        if ( !email || !password) {
            console.log('incorrect login submission');
            alert('incorrect login submission');
            return;
        }    
        const url = `${this.props.baseURL}/signin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(rtnData => {
            if (rtnData.data.length>0) {
                const user = rtnData.data[0];
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            } else {
                console.log(rtnData.mesg);
                alert(rtnData.mesg);
            }
        })
        .catch(err => console.log(err))
    }
    
    render(){
        const { onRouteChange } = this.props;

        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw5 center">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0 tc">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email"  
                                id="email"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"
                                autoComplete="new-password"
                                onChange={this.handleChange}
                            />
                        </div>
                        </fieldset>
                        <div className="">
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            onClick={this.onSubmitSignIn}
                            type="submit" 
                            value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                        </div>
                    </form>
                </main>
            </article> 
        );
    }
}

export default Signin;