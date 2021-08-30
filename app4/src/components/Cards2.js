import React, { Component } from 'react';
import SpringBootAPI from '../api/SpringBootAPI';
import Card2 from './Card2';

export class Cards2 extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            card: {},
            cardId: '',
            cardTitle: '',
            cardImg1File: '',
            cardImg1Text: '',
            cardImg2File: '',
            cardImg2Text: '',
            cardImg3File: '',
            cardImg3Text: '',
            cardImg4File: '',
            cardImg4Text: '',
            cardText: ''
        }
    }

    componentDidMount() {
        this.getCards();
    }

    getCards = () => {
        SpringBootAPI.getData()
            .then(response => {
                this.setState({
                    cards: response.data
                })
            })
    }

    render() {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', flexFlow: "row wrap" }}>
                    {this.state.cards.length ?
                        this.state.cards.map((c) =>
                            <Card2 c={c} key={c.cardId} />
                        ) : <h4 style={{ color: "green" }}>Loading React Product Category Plugin...</h4>
                    }
                </div>
            </>
        )
    }
}


export default Cards2;