import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { LogoFacebook, LogoTwitter, LogoLinkedin, LogoInstagram } from 'react-ionicons';
import { Link } from 'react-router-dom';

function Footer() {
    const height = 25;
    const width = 25;

    return (
        <Container fluid className="footer">
                <div className="enclose">
                    <Row>
                        <Col md={6}>
                            <ul className="footer-nav">
                                <li>
                                <Link to="/">Events</Link>
                                </li>
                                <li><Link to="/login">Log In</Link></li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com/hackthenorth/">
                                <LogoFacebook
                                    color={'#3b5998'} 
                                    height={`${height}px`}
                                    width={`${width}px`}
                                    />
                                </a></li>
                                <li><a href="https://twitter.com/hackthenorth">
                                <LogoTwitter
                                    color={'#00acee'} 
                                    height={`${height}px`}
                                    width={`${width}px`}
                                    />
                                </a></li>
                                <li><a href="https://www.linkedin.com/company/hack-the-north">
                                <LogoLinkedin
                                    color={'#0e76a8'} 
                                    height={`${height}px`}
                                    width={`${width}px`}
                                    />
                                </a></li>
                                <li><a href="https://www.instagram.com/hackthenorth">
                                <LogoInstagram
                                    color={'#8a3ab9'} 
                                    height={`${height}px`}
                                    width={`${width}px`}
                                    />
                                </a></li>
                            </ul>
                        </Col>
                    </Row>
            
                    <Row>
                        <p className="footer-text text-muted">&copy; 2021 by Hack The North. All rights reserved.</p>
                    </Row>
                </div>
        </Container>
    );
}

export default Footer;