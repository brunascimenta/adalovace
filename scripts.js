const lastOne = document.querySelector('.image')

const myObserver = new IntersectionObserver((entries) => {
    console.log (entries)
})

myObserver.observe (Image)
