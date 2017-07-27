import React, {Component} from 'react';
import superagent from 'superagent';
import TableHeader from './UserListTableHeader';
import TableBody from './UserListTableBody';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userListTitle: '用户列表'
        };
    }

    render() {
        return (
            <div id='paper-list' className="col-sm-offset-2 col-sm-8">
                <TableHeader userListTitle={this.state.userListTitle}/>
                <TableBody/>
            </div>
        );
    }
}