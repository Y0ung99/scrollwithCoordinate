const boxes = document.querySelector('.boxes');
const buttons = document.querySelector('.buttons');
const an = document.querySelector('.an');

boxes.addEventListener('click', (event) => {
    const targetRect = event.target.getBoundingClientRect();
    const clientCordinateX = event.clientX;
    const clientCordinateY = event.clientY;
    const pageCordinateX = event.pageX;
    const pageCordinateY = event.pageY;
    console.log(targetRect);
    console.log(`client: ${clientCordinateX}, ${clientCordinateY}`);
    console.log(`page: ${pageCordinateX}, ${pageCordinateY}`);
})

buttons.addEventListener('click', (event) => {
    selectEvent(event);
})

function selectEvent(event) {
    const className = event.target.className;
    switch (className) {
        case 'scroll by_100px':
            window.scrollBy(0,100);
            break;
        case 'scroll to_100px':
            window.scrollTo(0,100)
            break;
        case 'scroll into_an':
            an.scrollIntoView();
            break;
        default:
            break;
    }
}
