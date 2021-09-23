export const ACTION_PROFILE_TRANSACTIONS_FETCHING = '[profile-posts] FETCHING'
export const ACTION_PROFILE_TRANSACTIONS_SET = '[profile-posts] SET'
export const ACTION_PROFILE_TRANSACTIONS_ERROR = '[profile-posts] ERROR'

export const profileTransactionsFetchingAction = userId => ({
    type: ACTION_PROFILE_TRANSACTIONS_FETCHING,
    payload: userId
})

export const profileTransactionsSetAction = transactions => ({
    type: ACTION_PROFILE_TRANSACTIONS_SET,
    payload: transactions
})

export const profileTransactionsErrorAction = error => ({
    type: ACTION_PROFILE_TRANSACTIONS_ERROR,
    payload: error
})