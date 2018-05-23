class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            F0: true,
            F1: false,
            F2: false,
            name:'',
            email:'',
            passWord:'',
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
                <div>
                    this is F2 page
                </div>
            )
        }
    }
}

ReactDOM.render(<App />, document.getElementById('app'));