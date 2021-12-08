const menuNavBtn = document.querySelector('.header__mobile-nav')
const mobileNav = document.querySelector('nav .mobile')
let windowWidth = window.innerWidth
const productsHeadingItem = document.querySelectorAll('.products__heading ul li a')
const productsList = document.querySelector('.products__list')
const productsItem = document.querySelectorAll('.products__list-item')
const productsLoadmore = document.querySelector('.products__loadmore')
const worksHeadingItem = document.querySelectorAll('.allwork__heading ul li a')
const worksList = document.querySelector('.allwork__list')
const worksItem = document.querySelectorAll('.allwork__list-item')
const worksLoadMore = document.querySelector('.allwork__loadmore')
const footerArrow = document.querySelector('.footer__bottom a')
const studioRentalItem = document.querySelectorAll('.itembox.--studioitem')

function removeClass(item1,item2){
    item1.classList.remove('--active')
    item2.classList.remove('--active')
}

menuNavBtn.addEventListener('click',function(){
    mobileNav.classList.toggle('--active')
    menuNavBtn.classList.toggle('--active')
})

window.addEventListener('resize', function(){
    if(windowWidth > 992){
        removeClass(mobileNav, menuNavBtn)
    }
})

productsHeadingItem.forEach(function(item,i){
    item.addEventListener('click',function(e){
        e.preventDefault()
        productsHeadingItem.forEach(item => {item.classList.remove('--active')})
        productsLoadmore.classList.remove('--unactive')
        this.classList.add('--active')
        if(i === 1){
            productsItem.forEach(function(item,i){
                item.classList.remove('--unactive')
                if(i % 2 === 0){
                    productsItem[i].classList.add('--unactive')
                }
            })
        }else if(i === 2){
            productsItem.forEach(function(item,i){
                item.classList.remove('--unactive')
                if(i % 2 !== 0){
                    productsItem[i].classList.add('--unactive')
                }
            })
        }else{
            productsItem.forEach(function(item){
                item.classList.remove('--unactive')
            })
        }
    })
})

worksHeadingItem.forEach(function(item,i){
    item.addEventListener('click',function(e){
        e.preventDefault()
        worksHeadingItem.forEach(item => {item.classList.remove('--active')})
        worksLoadMore.classList.remove('--unactive')
        this.classList.add('--active')
        if(i === 1){
            worksItem.forEach(function(item,i){
                item.classList.remove('--unactive')
                if(i % 2 === 0){
                    worksItem[i].classList.add('--unactive')
                }
            })
        }else if(i === 2){
            worksItem.forEach(function(item,i){
                item.classList.remove('--unactive')
                if(i % 2 !== 0){
                    worksItem[i].classList.add('--unactive')
                }
            })
        }else{
            worksItem.forEach(function(item){
                item.classList.remove('--unactive')
            })
        }
    })
})

worksLoadMore?.addEventListener('click',function(e){
    e.preventDefault()
    worksLoadMore.classList.add('--unactive')
    if(worksHeadingItem[0].classList.contains('--active')){
        let cln
        worksItem.forEach(item => {
            cln = item.cloneNode(true)  
            worksList.appendChild(cln)
        })
    }else{
        worksItem.forEach(function(item){
            item.classList.remove('--unactive')
        })
    }
})

// back to top
footerArrow.addEventListener('click',function(e){
    e.preventDefault()
    window.scrollTo(0,0)
})

// studio rental
studioRentalItem.forEach(function(item){
    item.addEventListener('click',function(){
        studioRentalItem.forEach(function(item){
            item.classList.remove('--active')
        })
        this.classList.add('--active')
    })
})

// slider Studio details

const studioDetailSlider = document.querySelector('.studio-details .container .studio-details__heading .img');
const studioDetailPrev = document.querySelector('.studio-details__heading .info__nav .info__nav-prev')
const studioDetailNext = document.querySelector('.studio-details__heading .info__nav .info__nav-next')
const studioDetailfullscreen = document.querySelector('.studio-details__heading .info__screen')

let stuSlider = new Flickity( studioDetailSlider, {
  // options
  cellAlign: 'left',
// disable previous & next buttons and dots
prevNextButtons: false,
pageDots: false,
wrapAround: true,
fullscreen: true
});

studioDetailPrev.addEventListener('click',function(e){
    e.preventDefault()
    stuSlider.previous();
})

studioDetailNext.addEventListener('click',function(e){
    e.preventDefault()
    stuSlider.next();
})
studioDetailfullscreen.addEventListener('click',function(e){
    e.preventDefault()
    stuSlider.viewFullscreen()
})