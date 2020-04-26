import React from 'react';
import Message from 'components/Message';

const Chatlog = () => {
	return (
		<header>
            <ul className="chat-log">
                <i className="fas fa-user-astronaut chat-userImg"></i>
                <li className="chat-userName">Bijaya Gautam</li>
                <li className="chat-time">2:45 pm</li>
            </ul>
            <Message/>{/* component */}
        </header>
	)
}


export default Chatlog;
