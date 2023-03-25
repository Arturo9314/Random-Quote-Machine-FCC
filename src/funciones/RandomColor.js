export default function RandomColor(){
    const colors = ['#ADB2D3', '#CF8BA9', '#FCD581', '#A1674A', '#003F91', '#3B8EA5']
    const randomColor = colors[Math.floor(Math.random()*colors.length)]
    return randomColor;
}