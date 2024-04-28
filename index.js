let maker = document.querySelector(".maker")

const facts = async () => {
    let factsResponse = await fetch("https://cat-fact.herokuapp.com/facts")
    let caller = await factsResponse.json()
    let b = caller.length
    let a = Math.floor(Math.random() * b)
    console.log(caller[a].text)
    maker.innerHTML = maker.innerHTML + caller[a].text
}

facts()