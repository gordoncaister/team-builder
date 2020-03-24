import React from 'react';


const TeamList = props => (
    <div>
        <h2>Say "Hi" to the team!</h2>
        {
            props.teamList.map(member => <p>{member.name}</p>)
        }
    </div>
)
export default TeamList;