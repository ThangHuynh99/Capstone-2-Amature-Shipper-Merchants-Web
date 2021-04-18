import React, { useState, useEffect } from 'react';
import {
    Container, 
    Row, 
    Col,
    Button,
    Form,
    InputGroup,
    Input,
    InputGroupAddon
} from 'reactstrap';
import Moment from 'moment';
import realtime from '../../firebase';
import ScrollToBottom from 'react-scroll-to-bottom';
import '../Styles.css';

import PropTypes from 'prop-types';

Chat2.propTypes = {
    name: PropTypes.string,
    idroom: PropTypes.string
};

function Chat2(props) {
    const [chats, setChats] = useState([]);
    const [name] = useState('ThangHuynh');
    const [newchat, setNewchat] = useState({id:'ThangHuynh', imgmessage:'', message: '', date: '' });
 
    useEffect(() => {
            const fetchData = async () => {
                realtime.database().ref('Chatroom/lz5po5nA86I23yZ7xUvi' ).on('value', resp => {
                setChats([]);
                setChats(snapshotToArray(resp));
                });
            };
            fetchData();
        }, [newchat]);

      const snapshotToArray = (snapshot) => {
        const returnArr = [];
        snapshot.forEach((childSnapshot) => {
            const item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        });
        return returnArr;
    }

    const submitMessage = (e) => {
        e.preventDefault();
        const chat = newchat;
        chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
        const newMessage = realtime.database().ref('Chatroom/lz5po5nA86I23yZ7xUvi').push();
        newMessage.set(chat);
        setNewchat({...newchat,message: '', date: '',imgmessage: '' });
    };

    const onChange = (e) => {
        e.persist();
        setNewchat({...newchat, message: e.target.value});
    }

   return (
        <div className="Container">
            <Container>
                <Row>
                    <Col xs="8">
                        <ScrollToBottom className="ChatContent">
                            {chats.map((item, idx) => (
                                <div key={idx} className="MessageBox">
                                        <div className="ChatMessage">
                                          <div className={`${item.id === name? "RightBubble":"LeftBubble"}`}>
                                         
                                            <span className="MsgDate">{item.id} at {item.date}</span>
                                            <p>{item.message}</p>
                                            </div>
                                    </div>  
                                </div>
                            ))}
                        </ScrollToBottom>
                        <footer className="StickyFooter">
                            <Form className="MessageForm" onSubmit={submitMessage}>
                                <InputGroup>
                                <Input type="text" name="message" id="message" placeholder="Enter message here" value={newchat.message} onChange={onChange} />
                                    <InputGroupAddon addonType="append">
                                        <Button variant="primary" type="submit">Send</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Chat2;