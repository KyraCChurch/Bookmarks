const React = require('react');

class Show extends React.Component {
   
    render(){
        const {name, color, readyToEat, _id} = this.props.veggie
        return(
        <>
           <h1> {name[0].toUpperCase() + name.substring(1)} Show Page </h1>
            <nav>
                <a href="/veggies">Back To Veggies Home</a>
            </nav>
            <p>{name} is {color} and {readyToEat? 'it\'s ready to eat': 'it\'s not ready to eat'}</p>
        </>
        )
   } 
}

module.exports = Show