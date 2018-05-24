class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            F0: true,
            F1: false,
            F2: false,
            F3: false,
            name:'',
            email:'',
            passWord:'',
            line1:'',
            line2:'',
            city:'',
            state:'',
            zipCode:'',
            phoneNumber:''
        }
    }

    startCheckout(e) {
        e.preventDefault();

        // console.log('hi');
        this.setState({
            F0: false,
            F1: true,
        })
    }

    
    toF2(e) {
        let data = {
            name: this.state.name,
            email: this.state.email,
            passWord: this.state.passWord
        }
        e.preventDefault();
        e.target.reset();
        this.setState({
            F1: false,
            F2: true
        })
        // console.log(data);
        fetch('http://localhost:3000/f1', {
            method:'POST', 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => console.log(data))
        .catch(() => console.log('post request failed'))
    }
    toF3(e) {
        let data = {
            name: this.state.name,
            email: this.state.email,
            passWord: this.state.passWord,
            line1: this.state.line1,
            line2: this.state.line2,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            phoneNumber: this.state.phoneNumber
        }
        e.preventDefault();
        // this.setState({
        //     F2: false,
        //     F3: true
        // })
        // console.log(data);
        fetch('http://localhost:3000/f1', {
            method:'POST', 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => console.log(data))
        .catch(() => console.log('post request failed'))
    }

    handleChange(e) {
       e.preventDefault();
       this.setState({
            [e.target.className]: e.target.value,
        }); 
    }

    render() {
        if(this.state.F0) {
            return (
              <form onSubmit={(e) => this.startCheckout(e)}>
                <input type="submit" value="start checkout"/>
              </form>
            )
        }
        if(this.state.F1) {
            return (
                <form onSubmit={(e) => this.toF2(e)}>
                  <label>
                      Name:
                      <input type="text" className="name" onChange={(e) => this.handleChange(e)}/>
                  </label>
                  <br></br>
                  <label>
                      Email:
                      <input type="text" className="email" onChange={(e) => this.handleChange(e)}/>
                  </label>
                  <br></br>
                  <label>
                      Password:
                      <input type="text" className="passWord" onChange={(e) => this.handleChange(e)}/>
                  </label>
                  <br></br>
                  <input type="submit" value="NEXT"/>
                
                </form>
            )
        }
        if(this.state.F2) {
            return(
                <form onSubmit={(e) => this.toF3(e)}>
                  <label>
                      Line 1:
                      <input type="text" className="line1" onChange={(e) => this.handleChange(e)}/>
                  </label>
                  <br></br>
                  <label>
                      Line 2:
                      <input type="text" className="line2" onChange={(e) => this.handleChange(e)}/>
                  </label>
                  <br></br>
                  <label>
                      City:
                      <input type="text" className="city" onChange={(e) => this.handleChange(e)}/>
                  </label>
                  <br></br>
                  <label>
                      State:
                      <input type="text" className="state" onChange={(e) => this.handleChange(e)}/>
                  </label>
                  <br></br>
                  <label>
                      Zip Code:
                      <input type="text" className="zipCode" onChange={(e) => this.handleChange(e)}/>
                  </label>
                  <br></br>
                  <label>
                      Phone Number:
                      <input type="text" className="phoneNumber" onChange={(e) => this.handleChange(e)}/>
                  </label>
                  <br></br>
                  <input type="submit" value="NEXT"/>
                
                </form>
            )
        }
    }
}

ReactDOM.render(<App />, document.getElementById('app'));