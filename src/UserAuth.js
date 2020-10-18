import React from "react";

class UserAuth extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false
    };
  }

  isLoggedIn = () => {
    this.setState({
      isLogged: true
    });
  };

  isLoggedOut = () => {
    this.setState({
      isLogged: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  {!this.state.isLogged ? (
                    <React.Fragment>
                      <button
                        onClick={this.isLoggedIn}
                        className="btn btn-success btn-sm"
                      >
                        Login
                      </button>
                      <p class="h4">Welcome user</p>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button
                        onClick={this.isLoggedOut}
                        className="btn btn-warning btn-sm"
                      >
                        Logout
                      </button>
                      <p class="h4">Welcome Guest</p>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserAuth;
