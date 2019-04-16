import React, { Component } from 'react';
import Card from './FilmCard'
import logo from '../logo.png';
import PersonCard from './PersonCard';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            people: [],
            loadFilmsClicked: false,
            loadPeopleClicked: false
        }
    }

    async componentDidMount() {
        try {
            let filmFetch = await fetch(`https://ghibliapi.herokuapp.com/films`)
            let films = await filmFetch.json();
            this.setState({ films })
        } catch (errFilm) {
            console.log(errFilm)
        } try {
            let peopleFetch = await fetch(`https://ghibliapi.herokuapp.com/people`)
            let people = await peopleFetch.json();
            this.setState({ people })
        } catch (errPeeps) {
            console.log(errPeeps)
        }
    }

    renderFilms() {
        //pushes data to be rendered
        return this.state.films.map(film => {
            //pushes data into new array
            return <Card key={film.id} film={film} />;
        })
    }

    renderPeople() {
        return this.state.people.map(people => {
            return <PersonCard key={people.id} person={people} />
        })
    }

    loadFilms() {
        this.setState({ loadFilmsClicked: true });
    }

    loadPeeps() {
        this.setState({ loadPeopleClicked: true })
    }

    render() {
        if (this.state.loadFilmsClicked === false && this.state.loadPeopleClicked === false) {
            return (
                <>
                    <header className="row">
                        <img src={logo} alt="ghibli logo" className="logo rounded mx-auto d-block mt-3" />
                    </header>
                    <div className="row">
                        <button onClick={() => this.loadFilms()} className="btn mt-4 btn-primary btn-lg btn-block">Load Films</button>
                    </div>
                    <div className="row">
                        <button onClick={() => this.loadPeeps()} className="btn mt-4 btn-primary btn-lg btn-block">Load Peeps</button>
                    </div>
                </>
            )
        } if (this.state.loadFilmsClicked === true) {
            return (
                <>
                    <section>
                        {this.renderFilms()}
                    </section>
                </>
            )
        } if (this.state.loadPeopleClicked === true) {
            return (
                <>
                    <section>
                        {this.renderPeople()}
                    </section>
                </>
            )
        }
        
    }

}

export default App;