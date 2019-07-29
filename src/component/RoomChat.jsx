import React, {Component} from 'react'
import Chat from './Chat.jsx'
import People from './People.jsx'


class RoomChat extends Component{

    constructor(props) {
        super(props);
        this.state = {listPeople: []};
    }
    onSubmit (event) {
        event.preventDefault();
      }
    render(){
        return(
            <div className = "container">
                <div className = "room-chat">
                    <div className = "row">
                        <div className = "left col-3">
                            <div className="header">
                                <h5>Peoples</h5>
                            </div>
                            <div>
                                <ul>
                                    {this.state.listPeople.map(function(data, index){
                                        return <li key = {index}>{data}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className = "right col-9">
                            <div className="header">
                                <h5>Room</h5>
                            </div>
                            <div className = "chat">
                                <div className = "messenger">
                                    <ul>
                                                                     
                                    </ul>
                                </div>
                                <form action="" onSubmit ={this.onSubmit}>
                                    <input type="text" placeholder="Text message"/>
                                    <a name="" id="" className="btn btn-primary isDisable" href="javascript:void(0);" role="button">
                                        <i className="fas fa-chevron-circle-right"></i>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount()
    {
        $.post("/getListPeople", (data)=>{
            this.setState({listPeople:data});
        }
        );
    }

}

export default RoomChat