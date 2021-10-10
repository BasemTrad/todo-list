import React,{ Component } from "react";
import './AddItems.css';

class AddItems extends Component {
    state = {
        name: '',
        age:'0'
    }
    handleChange = (e) => {
        this.setState({
    render(){
        return(
            <form>
                <input type="text" placeholder="Enter name..."id="name"onChange={this.handleChange} />
                <input type="number" placeholder="Enter age..."id="age"onChange={this.handleChange} />
                <input type="submit" value="Add" />

            </form>
        )
    }
}
export default AddItems;