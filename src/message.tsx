function Message(){
   const current=new Date();
   const time=current.getHours();
   let message=''
   const tColour={
    colour:""
   }
   
    if( time < 12 ) {message='goedemorgen' , tColour.colour="red"}
    if( time <18) {message='goedemiddag', tColour.colour="green";}
    else {message='goedenavond', tColour.colour="blue";}
    return(
        <div className="t-colour">
            {time}
            <br></br>
        <h1 style={{color:tColour.colour}}>{message}</h1>
        </div>
          )

}
export default Message;