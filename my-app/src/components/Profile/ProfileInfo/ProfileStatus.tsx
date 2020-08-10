import React from 'react';
import s from './ProfileInfo.module.css';

type stateType = {
    editMode: boolean,
    status: boolean
}

type propsType = {
    status: boolean,
    updateStatus: (status:boolean) => void
}

class ProfileStatus extends React.Component<any> {

    state = {
        editMode: false,
        status: this.props.status
    }
    toggleStatus = (status: boolean) => {
        this.setState({
            editMode: status
        })
        if (!status) {
            this.props.updateStatus(this.state.status)
        }
    }

    onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:propsType, prevState:stateType) {
        if (prevProps.status !== this.props.status) {
            this.setState ({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => this.toggleStatus(true)}>{this.props.status || "----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={() => this.toggleStatus(false)} value={this.state.status} />
                    </div>
                }
            </div >
        )
    }
}

export default ProfileStatus;