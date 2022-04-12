
function FixtureDate({dates}){

    console.log(dates);
    return(
        <>
            {dates.map((date)=> (
                <div className="fixtureFecha fs-5" key={date.name}>    
                    <h3 className="fecha fs-4">{date.name}</h3>            
                    <div className="gifLocal"><img src={date.gifLocal} alt={`gif ${date.localTeam}`} className="imgEscudo"/></div>
                    <div className="equipoLocal">{date.localTeam}</div>
                    <div className="resultado"> {date.score} </div>
                    <div className="equipoVisitante">{date.visitTeam}</div>
                    <div className="gifVisitante"><img src={date.gifVisit} className="imgEscudo" alt={`gif ${date.visitTeam}`}/></div>
                </div>
            ))}
        </>
    )
}

export default FixtureDate