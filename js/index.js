document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = () => {
    fetch('http://localhost:3000/monsters')
    .then(res => res.json())
    .then(data => console.log(data))
}

const renderData = () => {
    
}