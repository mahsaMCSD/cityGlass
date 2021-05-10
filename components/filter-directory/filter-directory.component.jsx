import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Card, Button } from 'react-bootstrap'

const FilterDirectory = (props) => (
    <div>
        <Accordion>
            {
                props.categories.map((category, i) => (
                    category.data.map((cat, index) => (
                            <Card key={index}>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey={index === 0 ? '0' : index}>
                                        {cat.parent.category}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index === 0 ? '0' : index}>
                                    <Card.Body>
                                        <ul className="list-group border-less mb-3">
                                            {cat.subcategories.map((sub, i) => (
                                                <li key={i} className="list-group-item px-0"><a className="text-secondary text-decoration-none" onClick={() => handleCatSelect(sub)}>{sub.category}</a></li>
                                            ))
                                            }
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                        
                    ))
                ))
            }


        </Accordion>
    
    </div>


)
export default FilterDirectory