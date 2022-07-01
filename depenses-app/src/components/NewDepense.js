function NewDepense(props) {
    return (
        <div>
            New depense
            <button onClick={() => {
                props.onAddNewDepense({ id: 4, title: 'Soulayma', amount: '1000', date_d: new Date() })
            }}>Add New Depense</button>
        </div>
    )
}

export default NewDepense;