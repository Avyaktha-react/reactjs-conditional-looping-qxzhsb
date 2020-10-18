import React from "react";

class HobbySelectorRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby: null
    };
  }
  updateCheck = event => {
    this.setState({
      hobby: event.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.state)}</pre>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header bg-secondary text-white">
                  <h5>Hobby Selector Radio </h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <form>
                        <div class="form-check">
                          <input
                            onChange={this.updateCheck}
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="eating"
                          />
                          <label class="form-check-label" for="exampleRadios1">
                            Eating
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            onChange={this.updateCheck}
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="sleeping"
                          />
                          <label class="form-check-label" for="exampleRadios2">
                            Sleeping
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            onChange={this.updateCheck}
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios3"
                            value="coding"
                          />
                          <label class="form-check-label" for="exampleRadios3">
                            Coding
                          </label>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10">
                      {this.state.hobby === "eating" ? (
                        <React.Fragment>
                          <div class="eating animated jello">
                            <strong>Vegi is only eating</strong>
                          </div>
                        </React.Fragment>
                      ) : null}
                      {this.state.hobby === "sleeping" ? (
                        <React.Fragment>
                          <div class="sleepingman animated jello">
                            <strong> Vegi is sleeping</strong>
                          </div>
                        </React.Fragment>
                      ) : null}
                      {this.state.hobby === "coding" ? (
                        <React.Fragment>
                          <div class="coding animated jello">
                            <strong> Vegi is working hard</strong>
                          </div>
                        </React.Fragment>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HobbySelectorRadio;
