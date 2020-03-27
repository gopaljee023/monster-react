import React  from 'react';
import './search-box.styles.css';

export  const SearchBox = ({placeHolder,onHandleChange})=>(
    <input className="search"
    type="search" placeholder={placeHolder}
    onChange={onHandleChange}/>
);

/*export class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
          
        }
    }

    render() {
        return (
           <input type="search" placeholder="search monstersXXX"
              onChange={e => this.props.updateTextCB(e.target.value)}/>
    
        )
    }
}
*/

