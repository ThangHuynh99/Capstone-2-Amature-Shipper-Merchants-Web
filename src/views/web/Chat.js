import React, { useState } from 'react';

function Chat(props) {
    const [chats, setChats] = useState([]);
    const [users, setUsers] = useState([]);
    const [nickname, setNickname] = useState('');
    const [newchat, setNewchat] = useState({ users: '', message: '', date: '', type: '' });

    return (
        <div>

        </div>
    );
}

export default Chat;