import React, {Component} from 'react';
import {render} from 'react-dom';
import {Modal, Button} from 'react-bootstrap';
import superagent from 'superagent';

export default class EditorUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        };
    }

    cancelButton() {
        this.props.onCancelModal();
    }

    confirmButton() {
        superagent
            .post(API_PREFIX + '/users')
            .set('Content-Type', 'application/json')
            .send({name: this.state.name, age: this.state.age})
            .end((err, res) => {
                if (res.statusCode === 201) {
                    this.props.onUserList();
                    this.props.onCancelModal()
                } else {
                    throw err;
                }
            });
    }

    editUserName() {
        this.setState({name: this.name.value});
    }

    editAge() {
        this.setState({age: this.age.value})
    }

    render() {
        return (
            <div id='edit-user paper-info'>
                <div className='static-modal'>

                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>添加用户</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='row'>
                                <label className='col-sm-2 label-control'> 姓名</label>
                                <div className='col-sm-6'>
                                    <input type='text' className='form-control' placeholder='请输入姓名'
                                           ref={(ref) => {
                                               this.name = ref;
                                           }}
                                           onBlur={this.editUserName.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className='row'>
                                <label className='col-sm-2  label-control'>年龄</label>
                                <div className='col-sm-6'>
                                    <input type='number' className='form-control' placeholder='请输入年龄'
                                           ref={(ref) => {
                                               this.age = ref;
                                           }}
                                           onBlur={this.editAge.bind(this)}
                                    />
                                </div>
                            </div>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.cancelButton.bind(this)}>取消</Button>
                            <Button bsStyle='primary' onClick={this.confirmButton.bind(this)}>确定</Button>
                        </Modal.Footer>

                    </Modal.Dialog>
                </div>
            </div>
        );
    }
}