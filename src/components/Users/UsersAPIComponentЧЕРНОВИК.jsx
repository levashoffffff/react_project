import React from 'react';
import Users from './Users';
import axios from 'axios';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount - 26950);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
    }

    /* getUsers = () => {
        if (this.props.usersData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                this.props.setUsers(response.data.items);
            });
        }
    } */
    render() {
        return <Users 
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    usersData={this.props.usersData}
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
        />
    }

}

export default UsersAPIComponent;