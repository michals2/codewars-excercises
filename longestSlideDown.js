const l = console.log;

const longestSlideDown = (pyr) => {

}

const subPyramids = (pyr) => {
    const sub1 = pyr.slice(1).forEach( (c, i, a) => {
        l('c --> ', c)
        c.pop()
    });
    const sub2 = pyr.slice(1);

    l('sub1 --> ', sub1)
}

// l('23 --> ', longestSlideDown [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]] )

l(subPyramids([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) )