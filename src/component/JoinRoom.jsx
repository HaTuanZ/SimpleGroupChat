import React, {Component} from 'react'

class JoinRoom extends Component {
    onSubmit (event) {
        event.preventDefault();
      }
    render()
    {
        return(
            <div className = "container">
                <div id="join-room" className = "join-room">
                    <form  onSubmit ={this.onSubmit}>
                        <h3 htmlFor = "name">Enter your name</h3>
                        <div className = "realative">
                        <input type="text" id="name" placeholder="Your Name" required />
                        <a name="" id="" type="submit" className="btn btn-primary isDisable" href='/roomChat' role="button">
                            Join Room  
                            <i className="fas fa-sign-in-alt"></i>
                        </a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default JoinRoom;