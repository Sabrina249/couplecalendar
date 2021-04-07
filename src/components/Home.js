import React from "react";
import Calendarbase from './Calendarbase';
import ChooseOneDate from './ChooseOneDate';
import { WindowOpener } from './Windowopener';
export class Home extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            message: ""
        }
        this.childResponse = this.childResponse.bind(this);
    }

    childResponse (err, res) {
        if (err) {
            this.setState({ message: res })
        }
        this.setState({ message: res })
    }

    render () {
        const {message} = this.state;
        return (
            <div>
            <Calendarbase>
              <ChooseOneDate/>
            </Calendarbase>

                    {message}
                    <WindowOpener
                        url="http://localhost:3000/child"
                        bridge={this.childResponse}
                    >
                        Open Browser
      </WindowOpener>
            </div>
        )
    }
}

export default Home