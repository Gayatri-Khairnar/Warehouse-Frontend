import '../css/Weather.css';
import search from '../images/search.png';
import sunny from '../images/sunny.png';
import cloudy from '../images/cloudy.png';
import snow from '../images/snow.png';
import rain from '../images/rain.png';
import heavyRain from '../images/heavyRain.png';
import foggy from '../images/faggy.png';
import drizzling from '../images/drizzle.png';
import windy from '../images/windy.png';
import moisture from '../images/moisture.png';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
export function Weather() {
    const KEY = 'b0963f7c17805d702054fa53af825504';

    const searchFungtion = async()=>{
        const element = document.getElementById('CityName');
        if(element[0].value == ''){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=${KEY}`;
    
        let response = await fetch(url);
        let data =await response.json();
        const humididy = document.getElementById('humidity-value');
        const wind = document.getElementById('wind-speed');
        const temp = document.getElementById('temp');
        const location = document.getElementById('location');

        humididy[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;
        temp[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
    }

    return(
        <Container>
            <Row>
                <Col lg={4}>
                    <Form>
                        <Row>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            id='CityName'
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" onClick={searchFungtion}><img src={search} height={20} width={20}></img></Button>
                        </Col>
                        </Row>
                    </Form>
                    <Row>
                        <Col>
                            <img src={cloudy} height={50} width={50} />
                        </Col>
                        <Col>
                            <div id='temp'>24°C</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col><img src={windy} height={50} width={50} /></Col>
                        <Col><div id='wind-speed'>10 km/hr</div></Col>
                    </Row>
                    <Row>
                        <Col><img src={moisture} height={50} width={50} /></Col>
                        <Col><div id='humidity-value'>10%</div></Col>
                    </Row>
                    <Row>
                        <Col><div id='location'>London</div></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

//