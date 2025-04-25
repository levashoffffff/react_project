import { createSelector } from "reselect";

export const getUser = (state) => {
    return state.userPage.usersData;
}

export const getUserSelector = (state) => {
    return getUser().filter(u => true);
}

export const getUserSuperSelector = createSelector(getUser, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.userPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.userPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.userPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.userPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.userPage.followingInProgress;
}