import React, { Component } from 'react';
import Member from './member';


class MemberList extends Component {
    
    constructor() {
        super();
        this.state = {
            members: [],
            loading: false,
            error: null
        };
    }

    getFakeMembers = count => new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/0.6/?nat=us&results=${count}`;
        const request = new XMLHttpRequest();
        request.open('GET', api);
        //request.setRequestHeader({"access-control-allow-origin" : true});
        request.onload = () => (request.status === 200) ?
            resolves(JSON.parse(request.response).results) :
            rejects(Error(request.statusText));
        request.onerror = err => rejects(err);
        request.send();
    });

    componentWillMount() {
        this.setState({loading:true});
        this.getFakeMembers(this.props.count).then(
            members => {
                this.setState({members, loading: false});
            },
            error => {
                this.setState({error, loading: false});
            }
        )
    }

    componentWillUpdate() {
        console.log('updating lifecycle');
    }

    render() {
        const {members, loading, error} = this.state;
        return (
            <div className="member-list">
                {(loading) ?
                    <span>Loading Members</span> :
                    (members.length) ?
                        members.map((member, i) =>
                            <Member key={i} {...member.user}/>
                        ) :
                        <span>0 members loaded...</span>
                }
                {(error) ? <p>Error Loading Members: error</p> : ""} 
            </div>
        );
    }

}

export default MemberList;