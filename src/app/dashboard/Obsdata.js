
import React, { Component } from 'react'
export class Obsdata extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.obsdata={
          temp:0
          ,rhum:0
        };
        props.obsdata.forEach(obsField => {
          switch(obsField.elementName){
            case 'TEMP': this.obsdata.temp=obsField.elementValue;break;
            case 'HUMD': this.obsdata.rhum=(parseFloat(obsField.elementValue)*100).toFixed(1);break;
            default:
              break;
          }
          
        });
        
      };
    render() {
        return (

        <div>
            <div>溫度:{this.obsdata.temp} C</div>
            <div>溼度:{this.obsdata.rhum}  %</div>
            
        </div>
        )
    }
}
export default Obsdata
