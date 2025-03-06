import { SvgIconProps } from "@mui/material";
import BlockIcon from '@mui/icons-material/Block';
import DecentralizationIcon from '@mui/icons-material/AccountTree';
import ConsensusIcon from '@mui/icons-material/HowToVote';
import ImmutableIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import SummaryIcon from '@mui/icons-material/Summarize';

export interface Parrafo {
    title: string,
    icon:React.ComponentType<SvgIconProps>
    paragraph: string,
}

const Parrafos: Parrafo[] = [{
    title: 'Bloques y Cadenas',
    icon: BlockIcon,
    paragraph: `Bloques:
                        Imagina un bloque como un registro de datos. Este bloque contiene información sobre transacciones, como quién envió qué y cuándo.
                        Cada bloque también contiene un \"hash\", que es una huella digital única del bloque.
                        Cadenas:
                        Los bloques se conectan entre sí en una cadena.
                        Cada bloque contiene el hash del bloque anterior, lo que crea un vínculo inmutable.
                        Si alguien intenta alterar un bloque, el hash cambiaría, y todos los bloques siguientes se volverían inválidos.
                        `
},

{
    title: 'Descentralización',
    icon: DecentralizationIcon,
    paragraph: `
                        En lugar de almacenarse en un solo lugar, el blockchain se distribuye en una red de computadoras (nodos).
                        Cada nodo tiene una copia completa del blockchain.
                        Esto hace que sea muy difícil de hackear o manipular, ya que se necesitaría alterar la mayoría de las copias.
                    `
},
{
    title: 'Consenso',
    icon: ConsensusIcon,
    paragraph: `
                        Antes de agregar un nuevo bloque a la cadena, los nodos de la red deben ponerse de acuerdo sobre su validez.
                        Este proceso se llama "consenso".
                        Existen diferentes mecanismos de consenso, como "prueba de trabajo" (utilizado por Bitcoin) y "prueba de participación" (utilizado por Ethereum).
                            `},
{
    title: 'Inmutabilidad',
    icon: ImmutableIcon,
    paragraph: `
        Una vez que un bloque se agrega a la cadena, no se puede modificar ni eliminar.
        Esto garantiza la integridad y la transparencia de los datos.`
},
{
    title: 'Aplicaciones del Blockchain:',
    icon: BlockIcon,
    paragraph: `
        Criptomonedas:
        Bitcoin, Ethereum y otras criptomonedas utilizan blockchain para registrar transacciones.
        Contratos inteligentes:
        Son programas informáticos que se ejecutan automáticamente cuando se cumplen ciertas condiciones.
        Cadenas de suministro:
        El blockchain se puede utilizar para rastrear el movimiento de bienes a lo largo de la cadena de suministro, lo que mejora la transparencia y la eficiencia.
        Votación electrónica:
        El blockchain se puede utilizar para crear sistemas de votación más seguros y transparentes.
        Registro de propiedad:
        El blockchain se puede utilizar para registrar la propiedad de activos, como bienes inmuebles o derechos de autor.
    `
},
{
    title: `Ventajas del Blockchain`,
    icon: SecurityIcon,
    paragraph: `Seguridad:
                        La descentralización y la inmutabilidad hacen que el blockchain sea muy seguro.
                        Transparencia:
                        Todas las transacciones se registran en un libro de contabilidad público.
                        Eficiencia:
                        El blockchain puede eliminar la necesidad de intermediarios, lo que reduce los costos y los tiempos de procesamiento.
                        Descentralización:
                        No hay una autoridad central que controle el blockchain.`
},
{
    title: 'Resumen',
    icon: SummaryIcon,
    paragraph: `En resumen, el blockchain es una tecnología innovadora con el potencial de transformar muchas industrias.`
}
];

export default Parrafos;