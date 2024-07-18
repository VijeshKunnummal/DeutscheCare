import React from 'react';
const ChatBar = ({ users }) => {
  
//   useEffect(() => {    
//     socket.on('newUserResponse', (data) => setUsers(data));
//     console.log("user ", users)
//   }, [socket, users]);
  
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
            {users.map((user) => (
              <p key={user.socketID}>{user.userName}+{user.socketID}</p>
            ))}
        </div>
      </div>
  </div>
  );
};
export default ChatBar;