import React, {Component} from 'react'

class People extends Component{
    render()
    {
        return(
            <li>{this.props.name}</li>
        );
    }
}

export default People