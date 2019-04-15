import React from 'react'

const User = ({avatar_url='http://loremflickr.com/235/235/men', name="Amir Tavakoli", location="Iran, Esfahan", bio='Front-end developer' }) => 
<div className="user-detail">
    <div className="user-detail__avatar">
        <img src={avatar_url} alt='avatar'/>
    </div>
    <h1 className="user-detail__name">
        {name}
    </h1>
    <div className="user-detail__location">
        location: {location}
    </div>
    <div className="user-detail__bio"> 
        bio: {bio}
    </div>
</div>;

export default User;