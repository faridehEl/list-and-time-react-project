function ListGroup(){
    const items=["Mashhad","Kish","Rasht", "Anzali"]
    return(
        <>
        <h2>List of City</h2>
        <ul className="list-group">
        {items.map((item)=><li className="list-group-item" key={item}>{item}</li>)}
        </ul>
        </>
    )

}
export default ListGroup;