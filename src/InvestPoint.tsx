export interface Point {
    title: string;
    point: string;
    style?: React.CSSProperties; // Agregar la propiedad style
    className?: string; // Agregar la propiedad className
}

class RandomColor {
    private static saturation = 80; 
    private static brighness = 120; 
    static randomValue = () => Math.floor(Math.random() * RandomColor.saturation);
    r:number;
    g:number;
    b:number;

    constructor(){
        this.r = RandomColor.randomValue();
        this.g = RandomColor.saturation;
        this.b = RandomColor.saturation; 
    }

    //color para el background
    getBG_RGBColor(){
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    //color para el background
    geTitle_RGBColor(){
        return `rgb(${this.r + RandomColor.brighness}, ${this.g + RandomColor.brighness }, ${this.b + RandomColor.brighness})`;
    }

};

const InvestPoint: React.FC<Point> = ({title,point,style, className}) =>{
    const randomColor = new RandomColor();
    
    return (
        <div style={{...style, backgroundColor:randomColor.getBG_RGBColor(), margin:'1rem', width:'80%', padding:'.5rem', borderRadius:'.5rem', fontSize:'large' }} className={className}>
            <h4 style={{padding:'.5rem', backgroundColor:'rgba(0,0,0,.6)', borderTopLeftRadius:'.5rem', borderBottomRightRadius:'.5rem', color:randomColor.geTitle_RGBColor()}}>
            {title}
                </h4>
                <div style={{backgroundColor:'rgba(0,0,0,.6)', padding:'.6rem', color:randomColor.geTitle_RGBColor()}}>
                    {point}
                </div>
        </div>
    );
}

export default InvestPoint;