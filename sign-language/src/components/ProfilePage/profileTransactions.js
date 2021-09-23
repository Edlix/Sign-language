const ProfileTransactions = () => {

    //TODO use real transactions
    let transactions = ["aaa", "bbb", "ccc", "ddd", "eee"]
    return (
        <>
            <h4>Check your transactions</h4>
            <ul>
                {transactions.map(transaction => <li>{transaction}</li>)}
            </ul>
        </>
    )
}

export default ProfileTransactions