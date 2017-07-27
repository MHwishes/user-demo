import React, {Component} from 'react';
import superagent from 'superagent';
import TableHeader from './UserListTableHeader';
import TableBody from './UserListTableBody';
import EditorUser from './EditorUser';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userListTitle: '用户列表',
            isShowSaveModal: false,
            userList: [],
        };
    }

    getUserList() {
        superagent
            .get(API_PREFIX + '/users')
            .end((err, res) => {
                if (err) {
                    throw (err);
                } else {
                    this.setState({userList: res.body})
                }
            });
    }

    saveUser() {
        this.setState({isShowSaveModal: true})
    }

    cancelModal(){
        this.setState({isShowSaveModal: false})
    }

    render() {
        return (
            <div id='paper-list' className="col-sm-offset-2 col-sm-8">
                <div>
                    <TableHeader userListTitle={this.state.userListTitle} onAddUser={this.saveUser.bind(this)}/>

                    <TableBody  onUserList={this.getUserList.bind(this)} userList={this.state.userList}/>

                </div>
                <div className={this.state.isShowSaveModal ? '' : 'hidden'}>

                    <EditorUser onCancelModal={this.cancelModal.bind(this)} onUserList={this.getUserList.bind(this)}/>

                </div>
            </div>
        );
    }
}