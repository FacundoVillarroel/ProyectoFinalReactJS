const notEmpyFields = (values) => {
    let accum = 0
    Object.values(values).forEach(value => {
        if (value === "" || value === null){
            accum++
        }
    })
    return (!(accum === 0))
}


export default notEmpyFields