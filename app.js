
const allstars= document.querySelector(".stars");
const stars= document.querySelectorAll(".stars li");


stars.forEach((star,index)=>
{
    star.addEventListener('click', ()=>
    {
        allstars.classList.add("disabled");
        stars.forEach((otherStar,othindex)=>
        {
        if(othindex <= index)
        {
            otherStar.classList.add('active');
        }
        })
    })
})

