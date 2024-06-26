import { Fragment, useState } from 'react';
import { IoLink } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";

export function Chats() {
    const [selectedChat, setSelectedChat] = useState(null);
    const [inputMessage, setInputMessage] = useState("");

    const chatData = [
        {
            name: 'Alice',
            lastMessage: 'Hey, how are you?',
            avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
            messages: ['Hey, how are you?', 'What are you doing?', 'Let’s catch up later.']
        },
        {
            name: 'Bob',
            lastMessage: 'Whats up?',
            avatar: 'https://cdn1.vectorstock.com/i/1000x1000/50/65/avatar-female-vector-5945065.jpg',
            messages: ['Hi Bob!', 'What’s up?', 'See you soon.']
        },
        {
            name: 'Charlie',
            lastMessage: 'See you soon!',
            avatar: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            messages: ['Hey Charlie!', 'When are you coming?', 'See you soon!']
        },
        {
            name: 'David',
            lastMessage: 'Got it, thanks!',
            avatar: 'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg',
            messages: ['Hi David', 'Can you help me with this?', 'Got it, thanks!']
        },
        {
            name: 'Eva',
            lastMessage: 'Call me when you are free.',
            avatar: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg',
            messages: ['Hi Eva', 'Call me when you are free.']
        },
        {
            name: 'Frank',
            lastMessage: 'Can you send me the file?',
            avatar: 'https://www.pngitem.com/pimgs/m/576-5768840_cartoon-man-png-avatar-transparent-png.png',
            messages: ['Hi Frank', 'Can you send me the file?', 'Thank you!']
        },
        {
            name: 'Karan',
            lastMessage: 'Can you send me the file?',
            avatar: 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-520-girl-avatar-image_1153283.jpg',
            messages: ['Hi Karan', 'Can you send me the file?', 'Thanks!']
        },
        {
            name: 'Sanjay',
            lastMessage: 'Can you send me the file?',
            avatar: 'https://avatar.iran.liara.run/public/33',
            messages: ['Hi Sanjay', 'Can you send me the file?', 'Thanks!']
        },
    ];

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (selectedChat && inputMessage.trim() !== "") {
                // eslint-disable-next-line no-unused-vars
                const newChatData = chatData.map(chat => {
                    if (chat.name === selectedChat.name) {
                        return {
                            ...chat,
                            messages: [...chat.messages, inputMessage]
                        };
                    }
                    return chat;
                });

                setSelectedChat({
                    ...selectedChat,
                    messages: [...selectedChat.messages, inputMessage]
                });
                setInputMessage("");
            }
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && selectedChat) {
            const newMessage = `File: ${file.name}`;
            setSelectedChat({
                ...selectedChat,
                messages: [...selectedChat.messages, newMessage]
            });
        }
    };

    return (
        <Fragment>
            <div className="main_container">
                <div className="main_chats">
                    <h1>Chats</h1>
                    {chatData.map((chat, index) => (
                        <div
                            className="chat_item"
                            key={index}
                            onClick={() => setSelectedChat(chat)}
                        >
                            <img src={chat.avatar} alt={`${chat.name}'s avatar`} />
                            <div className="chat_details">
                                <div className="chat_name">{chat.name}</div>
                                <div className="chat_last_message">{chat.lastMessage}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="main_messages">
                    {selectedChat ? (
                        <div className="messages_container">
                            <div className="messages_header">
                                <div className="chat_name">{selectedChat.name}</div>
                            </div>
                            <div className="messages_body">
                                {selectedChat.messages.map((message, index) => (
                                    <div
                                        className={`message ${index % 2 === 0 ? 'received' : 'sent'}`}
                                        key={index}
                                    >
                                        {message}
                                    </div>
                                ))}
                            </div>
                            <div className="message_input_container">
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    onChange={handleFileUpload}
                                />
                                <p
                                    className="file_upload_button"
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    <IoLink />
                                </p>
                                <input
                                    type="text"
                                    className="message_input"
                                    placeholder="Type a message"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <button
                                    className="send_button"
                                    onClick={() => handleKeyDown({ key: 'Enter' })}
                                >
                                    <IoMdSend />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p>Select a chat to view messages</p>
                    )}
                </div>
            </div>
        </Fragment>
    )
}