const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Create A New Veggie</h1>
            <nav>
                <a href="/fruits"> Go Back To Veggies Home Page</a>
            </nav>
            <form method="POST" action="/veggies">
                Name: <input type="text" name="name" placeholder='Name of Veggie Here'></input><br/>
                Color: <input type="text" name="color" placeholder='Color of Veggie Here'></input><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Veggie"></input>
            </form>
            </>
        )
    }
}

module.exports = New