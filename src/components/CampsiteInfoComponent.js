import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfoComponent extends Component {
    constructor(props){
        super(props);
        this.state={ 
            campsites:[{

            }]
        };
    }
    renderCampsite(campsite){
        return ( 
            <div className='col-md-5 m-1'>
                   <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>

            </div>
        )

    };
 
    renderComments(comments) {
        if(comments) {
            return ( 
            <div class='col col-md-5 m-1'>

            </div>

            );
        }
    

    }
    render(){
        if (this.props.campsite){
            return(
                <div className='row'>
                  hello  {/* { this.renderCampsite } */}
                </div>

            );
        } 
        else {
            return(
                <div> </div>
            )
        }
    }
}
export default CampsiteInfoComponent 