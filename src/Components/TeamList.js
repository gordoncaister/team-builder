import React from 'react';


const TeamList = props => (
   
    <div>
        <h2>Say "Hi" to the team!</h2>
        {
            props.teamList.map(member => (
                    <div>
                        <strong>Member:</strong> {member.name}    
                        <strong>Role:</strong> {member.role}
                        <button onClick={ () => props.addMemberToEdit(member)}>edit</button>
                    </div>

                ))
        }
    </div>
)
export default TeamList;