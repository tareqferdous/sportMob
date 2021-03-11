import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleTeam.css';

const SingleTeam = (props) => {
    const {strTeam, strLeague, strTeamBadge, idTeam} = props.league
    return (
        <div className=" mx-auto">        
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-3">
                    <Card className="card" style={{ width: '15rem'}}>
                    <Card.Img className="img-fluid" variant="top" src={strTeamBadge}/>
                    <Card.Body>
                        <div className="text-center">
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>{strLeague}</Card.Text>
                        <Button as={Link} to={`/team/${idTeam}`}variant="primary">View Details</Button> 
                        </div>
                    </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTeam;