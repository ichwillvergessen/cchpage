
import React, { Component } from 'react'
import Cwbstation from './Cwbstation'
const makeStation=(sta)=>{
    
    var output=[];
    for(let i=0;i<sta.length;++i)
        output.push(<Cwbstation station={sta[i]} />)
    return output;
}
export class Cwbdata extends Component {
    constructor(props) {
        super(props);
        this.state={
            cwbFetched:false
          }
          this.cwbstations={}
          this.getCWB();
      };
      getCWB(){
        fetch( 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=rdec-key-123-45678-011121314&format=JSON',{method:"GET"})
        .then(res => res.json())
        .then(data => {
              /*接到request data後要做的事情*/
              // this.setState({repoName: data[0]['name']});
              console.log(data);
              this.cwbstations=data["records"]["location"];
              this.stationCount=this.cwbstations.length;
              this.setState({
                cwbFetched: true
              })
        })
        .catch(e => {
            /*發生錯誤時要做的事情*/
            console.log(e);
        })
      }
    render() {
        return (
            <div>
                            <div className="az-dashboard-one-title">
              <div>
                <h2 className="az-dashboard-title">Cwb open data</h2>
                <p className="az-dashboard-text">Acquring from cwb's opendata</p>
              </div>
            
              
            
              
             
              <div className="az-content-header-right">
                <div className="media">
                  <div className="media-body">
                    <label>Data Counts</label>
                    <h6>{this.stationCount}</h6>
                  </div>{/* media-body */}
                </div>{/* media */}


                <button className="btn btn-purple" onClick={this.getCWB}>Refresh</button>
              </div>
            </div>{/* az-dashboard-one-title */}
            
            <div>
            <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                        <th className="wd-5p">&nbsp;</th>
                          <th className="wd-15p">測站名稱</th>
                        
                          <th className="wd-35p">觀測數據</th>
                          <th className="wd-10p">資料時間</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            this.state.cwbFetched===true?
                            makeStation(this.cwbstations):
                            (<div></div>)
                            }
                          </tbody>
                    </table>

            </div>
            </div>
            </div>
        )
    }
}
export default Cwbdata
