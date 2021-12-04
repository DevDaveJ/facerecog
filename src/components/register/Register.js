import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    onRegister = (event) => {
        event.preventDefault();
        const { name, email, password } = this.state;
        if (!name || !email || !password) {
            console.log('incorrect form submission');
            alert('incorrect form submission');
            return;
        }    
        const url = `${this.props.baseURL}/register`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
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
                alert(rtnData.mesg)
            }
        })
    }
    
    render(){
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw5 center">
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    id="name" 
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email"  
                                    id="email" 
                                    onChange={this.handleChange}
                                    autoComplete='off'
                                    required
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                    onChange={this.handleChange}
                                    autoComplete="new-password"
                                    required
                                />
                            </div>
                        </fieldset>
                        <div className="">
                        <input 
                            onClick={this.onRegister}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Register" />
                        </div>
                    </form>
                </main>
            </article> 
        );
    }

}

export default Register;