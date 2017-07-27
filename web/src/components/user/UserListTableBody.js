import React, {Component} from 'react';
import {render} from 'react-dom';
import superagent from 'superagent';
import {Modal, Button} from 'react-bootstrap';

export default class UserListTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            isShowDeleteModal: false,
            deleteId: null,
        };
    }

    componentDidMount() {
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

    deleteUser(userId) {
        this.setState({isShowDeleteModal: true, deleteId: userId})
    }

    cancelButton() {
        this.setState({isShowDeleteModal: false, deleteId: null})
    }

    confirmButton() {
        superagent
            .delete(API_PREFIX + `/users/${this.state.deleteId}`)
            .end((err, res) => {
                if (err) {
                    throw (err);
                } else {
                    if (res.status === 204) {
                        superagent
                            .get(API_PREFIX + '/users')
                            .end((err, res) => {
                                if (err) {
                                    throw (err);
                                } else {
                                    this.setState({userList: res.body, isShowDeleteModal: false});
                                }
                            });

                    }
                }
            });
    }

    render() {
        const fields = [
            {userInfo: '姓名'},
            {userInfo: '年龄'},
            {userInfo: '操作'}
        ];
        const userList = this.state.userList || [];
        let userHTML = userList.map(({name, age, id}, index) => {
            return (
                <tr key={index}>
                    <td> {name} </td>
                    <td>{age}</td>

                    <td>
                        <div className='action-buttons'>
                            <a className='green'>
                                <i className={'fa fa-pencil bigger'}> </i>
                            </a>
                            <a className='red'>
                                <i className='fa fa-trash-o bigger' onClick={this.deleteUser.bind(this, id)}> </i>
                            </a>
                        </div>
                    </td>
                </tr>
            );
        });
        return (
            <div id='paperList-form'>
                <div className='table-form'>
                    <table className='table table-striped table-bordered table-hover'>
                        <thead>
                        <tr>
                            {fields.map(({userInfo}, index) => {
                                return (<th key={index}>{userInfo}</th>);
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {userHTML}
                        </tbody>
                    </table>
                </div>
                <div className={this.state.isShowDeleteModal ? '' : 'hidden'}>
                    <div className='static-modal'>

                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>删除提示</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                您确定要删除此试卷吗？
                            </Modal.Body>

                            <Modal.Footer>
                                <Button onClick={this.cancelButton.bind(this)}>取消</Button>
                                <Button bsStyle='primary' onClick={this.confirmButton.bind(this)}>确定</Button>
                            </Modal.Footer>

                        </Modal.Dialog>
                    </div>
                </div>
            </div>
        );
    }
}

