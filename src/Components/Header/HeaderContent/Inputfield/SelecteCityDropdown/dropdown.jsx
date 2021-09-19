import React, { Component } from 'react'
import './dropdown.css'



//importing cityNames columns 
import CityName from './CityNameColumn/cityname'
import { connect } from 'react-redux';

export class dropdown extends Component {




    render() {

        const citiesArray = ['Bathinda','Delhi NCR','Ahmedabad','Bangalore','Chennai','Chandigarh','Tricity','Jaipur','Dubai','Hyderabad','Kolkata','Mumbai','Pune','Nagpur','Ludhiana','Visakhapatna','Vadodara','Abu dhabi','Lucknow','Kochi','Agra','Bhopal','Guwahati','Varanasi','Coimbatore','Riyadh'];
        return (
              <>
              {
                  this.props.button ?
            <div className='dropdown-wrapper'>
                <div className='dropdown'>
                  {
                      citiesArray.map((value) => {
                          return <CityName text={value} />
                      })
                  }
                </div>
            </div>  : null
    }
            </>
                
        )
    }
}

const mapStateToProps = (state) => {

    return {
        button: state.show
    }
}
export default connect(mapStateToProps) (dropdown);
