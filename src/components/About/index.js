import React from 'react';
import './style.css';
import { Col, Row } from 'react-bootstrap';

function About() {
    const test = `Detail-oriented full stack developer who is also pursuing a degree in Computer Science & Engineering at the University of Washington. A self-driven and supportive team-player that is quick to learn and adapt to any situation. In search of Junior Web Developer roles to contiue to grow as a developer while gaining experience in the industry.`;
    return (
        <Row className="justify-content-center">
            <Col md={12} className="py-5">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <p className="pt-4 text-center">
                            Born and raised in Seattle, WA, I have always had a
                            penchant for building and creating things. Always
                            curious about how things functioned,{' '}
                            <s>destroying</s> disassembling and reconstructing
                            everything I could get my hands on was more than
                            just a phase. That later evolved into a hobby
                            centered around computers/technology and becoming a
                            developer was the next logical transition. I really
                            enjoy designing/creating things that look great and
                            function well from the ground up.
                            <br />
                            <br />
                            Outside of the computer screen, you can find me
                            working to stay active in the gym or getting my
                            hands dirty underneath the hood of a car. I am
                            always looking for new hobbies to pick up and keep
                            me occupied outside of the office.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default About;
