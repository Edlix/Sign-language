import { ProfilePageAPI } from "../../components/ProfilePage/profilePageAPI"
import { ACTION_PROFILE_TRANSACTIONS_FETCHING, profilePostsErrorAction, profileTransactionsSetAction } from "../actions/profileActions"


export const profileTransactionsMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if (action.type === ACTION_PROFILE_TRANSACTIONS_FETCHING) {
        ProfilePageAPI.getUserTransactions(action.payload)
            .then(transactions => {
                dispatch(profileTransactionsSetAction(transactions))
            })
            .catch(({ message }) => {
                console.log("error")
            })
    }
}