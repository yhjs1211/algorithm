function solution(sizes) {
    let width = 0, height = 0;
    
    sizes.forEach((size)=>{
        size.sort((a,b)=>b-a);
        if(size[0]>width)width=size[0];
        if(size[1]>height)height=size[1];
    });
    return width*height;
}