import React, {Component} from 'react'

class Stances extends Component {
  render() {
    return (
      <section id="stances" name="stances">
       <header className="row">
        <div className="col-md-11 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
          <h2 className="section-header">the<span className="line-break section-header">anti-choice stances</span></h2>
        </div>
      </header>
      <div className="container-fluid">
        <div className="panel-group col-md-offset-2 col-md-8" id="accordion" role="tablist" aria-multiselectable="false">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingOne">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  fetuses are humans; therefore they have the right to life.
                </a>
              </h4>
            </div>
            <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
              <div className="panel-body">
                “Unless and until it can be proven that the unborn child is not a living entity, then its right to life, liberty, and the pursuit of happiness must be protected.” — Ronald Reagan | <a className="red-call" href="/stance/test">read more</a>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  abortions are dangerous.
                </a>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body">
                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." - Weo Alben | <a className="red-call" href="/stance/test">read more</a>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  women will just use abortion as a form of birth control.
                </a>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div className="panel-body">
                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod." - Uiod Oidlx | <a className="red-call" href="/stance/test">read more</a>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingFour">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  taxpayers should not be forced to fund abortions.
                </a>
              </h4>
            </div>
            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
              <div className="panel-body">
                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et." - Weo Alben | <a className="red-call" href="/stance/test">read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      </section>
    )
  }
}

export default Stances;

