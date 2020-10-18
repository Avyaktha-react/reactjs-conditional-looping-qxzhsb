import React from "react";

class HobbySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eating : false,
      sleeping : false,
      coding : false,
    }
  }
updateCheck = (event) => {
  this.setState({
    ...this.state,
    [event.target.name] : event.target.checked
  }

  )
}
  render() {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(this.state)}</pre>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="card">
                <div class="card-header bg-secondary text-white">
                  <h5>Hobby Selector </h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <form>
                               <div class="form-check">
                                <input 
                                name="eating" onChange={this.updateCheck}
                                class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                Eating
                                </label>
                              </div>
                              <div class="form-check">
                                <input 
                                name="sleeping" onChange={this.updateCheck}
                                class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                <label class="form-check-label" for="defaultCheck2">
                                Sleeping
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                name="coding" onChange={this.updateCheck}
                                 class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                                <label class="form-check-label" for="defaultCheck3">
                                Coding
                                </label>
                              </div>
                            </form>
                        </div>
                        <div class="col-md-8">
                          {
                            this.state.eating ?
                            <React.Fragment>
                                <div class="eating animated jello">
                                      <strong>venu is eating</strong> 
                                  </div>
                             
                            </React.Fragment> : null
                          }
                          {
                            this.state.sleeping ?
                            <React.Fragment>
                              <div class="sleeping animated jello">
                                  <strong> Tirumala is sleeping</strong>
                              </div>
                            </React.Fragment>:null
                          }
                            {
                            this.state.coding ?
                            <React.Fragment>
                              <div class="coding animated jello">
                                  <strong> Bharat is working</strong>
                              </div>
                            </React.Fragment>:null
                          }
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
export default HobbySelector;
