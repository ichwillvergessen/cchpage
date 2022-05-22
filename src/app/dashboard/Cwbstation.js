
import React, { Component } from 'react'
import Obsdata from './Obsdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export class Cwbstation extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.stationData=props.station
      };
    render() {
        return (

                                <tr>
                                    <td>
                                        {/* <i className="flag-icon flag-icon-us flag-icon-squared"></i> */}
                                        <i className="fa-solid fa-temperature-sun"></i>
                                        </td>
                                    <td><strong> {this.stationData.locationName} </strong></td>
                                    <td>
                                        <Obsdata obsdata={this.stationData.weatherElement}/>
                                    </td>
                                    <td>{this.stationData.time.obsTime}</td>
                                  </tr>
        )
    }
}
export default Cwbstation
