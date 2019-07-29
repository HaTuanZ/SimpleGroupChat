import React, {Component} from 'react'

class Chat extends Component{
    render()
    {
        return(
            <li className = {this.props.ref}>
                <p>{this.props.messenger}</p>
                <small>{this.props.name}</small>
            </li>
        )
    }
}

export default Chat