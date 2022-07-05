import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

const CampsiteDetail = ( {campsite} ) => {
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('campsite:', campsite);

    return (
        <Col md='12' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CampsiteDetail;