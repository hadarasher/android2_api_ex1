document.getElementById('fetchButton').addEventListener('click', async() => {
    try{
        const response = await fetch('http://localhost:3000/colors')

        if(!response.ok){
            throw new Error(`http error status ${response.status}`)
        }

        const data = await response.json()

        const titles=data.map(color => color.title).join("\n")
        const imageUrls = data.map(color => color.imageUrl).join("\n")

        const arrTitles=titles.split("\n")
        const arrImageUrls=imageUrls.split("\n")

        const arrColor=[]
        for(let i=0;i<arrTitles.length;i++){
            arrColor.push(new ColorClass(arrTitles[i],arrImageUrls[i]))
            console.log('created new color')
        }

        arrColor.forEach(url=>{
            const cardContainer = document.createElement('div')
            cardContainer.classList.add('card')
            cardContainer.style.margin = '10%'
            
            const imgElement = document.createElement('img')
            imgElement.src=url.imageUrl
            imgElement.alt = 'SVG image'
            imgElement.width=100
            imgElement.height=100

            const h3title = document.createElement('h3')
            h3title.innerText = url.title

            cardContainer.appendChild(imgElement)
            cardContainer.appendChild(h3title)

            document.getElementById("svgContainer").appendChild(cardContainer)
        })

    }catch(error){
        console.log(`fetch error: ${error})`)
    }
})