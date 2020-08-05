import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    }
    ChangeStatus = (status: boolean) => {
        this.setState({
            editMode: status
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => this.ChangeStatus(true)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={() => this.ChangeStatus(false)} value={this.props.status} />
                    </div>
                }
            </div >
        )
    }
}

export default ProfileStatus;