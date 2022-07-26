let minContainerWidth = 0;
let maxContainerWidth = 2400;

export const btnsTrends = (container, btn) => {

    if(btn === '⬅️'){
        if(minContainerWidth > 0){
            container.scroll(minContainerWidth-=200,0);
            //console.log(minContainerWidth);
        }
    }else {
        if(minContainerWidth < maxContainerWidth){
            container.scroll(minContainerWidth+=200,0);
            //console.log(minContainerWidth);
        }
    }
}