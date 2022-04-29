import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            gifs: []
        }
    }

    getGifs = (query = "puppies") => {

        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=5Y49MgjPRy0F0tI3s1JZVMHqwwIyvcpk&rating=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => { this.setState({gifs: data.map( gif => ({ url: gif.images.original.url }))})
    })

    }

    componentDidMount() {
        this.getGifs()
    }


    render() {

        return (
            <div>
                <GifSearch getGifs={this.getGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>

        )
    }


    


}


export default GifListContainer;