class player {
    constructor (id,name,birth,goles,yellowCard,redCard,firstGol){
        this.id = id;
        this.name = name ;
        this.birth = birth;
        this.goles = goles;
        this.yellowCard = yellowCard;
        this.redCard = redCard;
        this.firstGol = firstGol
    }
}

const fAguado = new player (1,"Aguado Francisco", "29/04/1999", 0, 0, 0, "01.07.2017 vs OCB");
const sAlbarello = new player (2,"Albarello Santiago","18/12/1985",0,0,1,"03.08.2013 vs Branca Leone")
const tAlbarello = new player (3,"Albarello Tomás","02/07/1993",3,2,0,"13.04.2013 vs Farsa FC")
const fAlen = new player (4,"Alen Facundo","11/07/1996",0,0,0,"26.09.2015 vs Jorge Totona")
const gCabrera = new player (5,"Cabrera Gonzalo","05/09/1996",0,0,0,"Sin Goles")
const sCarranza = new player (6, "Carranza Santiago","30/04/2000",1,4,0,"16.10.2021 vs El Fortín FC")
const eCarranza = new player (7,"Carranza Ezequiel","04/07/1990",1,5,0,"04.05.2013 vs La Legión Extranjera FC")
const lDeMaio = new player (8,"De Maio Luis","07/11/1991",0,0,0,"27.04.2013 vs Play Time FC")
const jFernandez = new player (9,"Fernandez Jonathan","14/03/1991",0,2,0,"27.04.2013 vs Play Time FC")
const cFerreira = new player (10,"Ferreira Cristian","05/01/1990",0,1,0,"Sin Goles")
const fFlores = new player (11,"Flores Fabricio","29/06/1992",0,0,0,"02.06.2018 vs Edinburgh SV")
const jGarcia = new player (12,"Garcia Noello Joaquin","14/07/1999",0,1,0,"Sin Goles")
const rManneh = new player (13,"Manneh Ramzi","06/10/1997",0,0,0,"Sin Goles")
const aMoreno = new player (14,"Moreno Agustin","18/01/1996",1,3,0,"04.11.2018 vs Chalchaleros FC")
const rPipitone = new player (15,"Pipitone Renzo","26/06/1995",0,0,0,"Sin goles")
const nPugliani = new player (16,"Pugliani Nicolas","13/09/1998",1,1,0,"18.09.2021 vs El Pasaje")
const mPugliani = new player (17,"Matias Pugliani","20/03/1992",0,0,0,"Sin goles")
const kRyan = new player (18,"Ryan Kevin","19/10/1992",0,0,1,"Sin goles")
const eSalomon = new player (19,"Salomon Ezequiel","30/04/1994",0,0,0,"Sin goles")
const mSanchez = new player (20,"Sanchez Maximiliano","13/12/1989",0,0,0,"Sin goles")
const sFrancia = new player (21,"Francia Santos","16/12/2001",1,1,0,"15.02.2020 vs Mario Bross FC")
const oSidoni = new player (22,"Sidoni Octavio","23/02/1993",0,0,0,"17.02.2018 vs La Docta FC")
const nVillarroel = new player (23,"Villarroel Nicolas","19/04/1990",0,0,0,"19.10.2013 vs Cayejas")
const sVillarroel = new player (24,"Villarroel Santiago","19/04/1990",0,0,0,"07.06.2014 vs Funebreros")
const lWeth = new player (25,"Weth Laureano","21/12/1992",0,0,0,"Sin Goles")



const allPlayers = [fAguado,sAlbarello,tAlbarello,fAlen,gCabrera,sCarranza,eCarranza,lDeMaio,jFernandez,cFerreira,fFlores,jGarcia,rManneh,aMoreno,rPipitone,nPugliani,mPugliani,kRyan,eSalomon,mSanchez,sFrancia,oSidoni,nVillarroel,sVillarroel,lWeth]

export default allPlayers