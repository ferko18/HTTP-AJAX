import React from 'react';
import Friend from './Friend'



const Friends = (props) => {
    console.log(props)
        return (
        <div>
            {props.friends.map(friend=><Friend key={friend.id} friend={friend}/>
                
                )}
        </div>
    );
};

export default Friends;