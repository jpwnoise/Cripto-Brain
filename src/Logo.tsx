import { Typography } from "@mui/material";
import React from "react";

interface LogoProps {
    styleNumber: number;
}

const Logo: React.FC<LogoProps> = ({ styleNumber }) => {
    if (styleNumber === 1)
        return (
            <>
                <svg style={{ width: '30px' }} viewBox="0 0 80 86.29973403616074">
                    <g transform="translate(-5.38532814646318, -29.423642607634754) scale(1.8949738310160065)"
                        fill="#137DC5">
                        <path d="M17.021 40.897999999999996 l3.3398 0 c-0.52734 7.0605 4.2773 12.363 17.813 3.6621 l4.3945 0 l-2.7539 11.953 c-14.854 8.5547 -36.885 5.9766 -33.662 -15.615 l-3.3105 0 c0.17578 -0.79102 0.35156 -1.7285 0.58594 -2.7539 c2.9883 -13.096 12.979 -22.617 26.895 -22.617 c7.6758 0 12.1 2.1973 14.736 4.0137 l-2.8418 12.246 l-4.7168 0 c-10.605 -11.426 -19.775 0.23438 -20.479 9.1113 z">
                        </path>
                    </g>
                </svg>
                <svg height="0" width="0" viewBox="0 0 0 0">
                    <defs id="SvgjsDefs1444">
                        <linearGradient id="SvgjsLinearGradient1451">
                            <stop id="SvgjsStop1452" stopColor="#2d388a" offset="0">
                            </stop>
                            <stop id="SvgjsStop1453" stopColor="#00aeef" offset="1">
                            </stop>
                        </linearGradient>
                        <linearGradient id="SvgjsLinearGradient1454">
                            <stop id="SvgjsStop1455" stopColor="#2d388a" offset="0">
                            </stop>
                            <stop id="SvgjsStop1456" stopColor="#00aeef" offset="1">
                            </stop>
                        </linearGradient>
                        <linearGradient id="SvgjsLinearGradient1457">
                            <stop id="SvgjsStop1458" stopColor="#2d388a" offset="0">
                            </stop>
                            <stop id="SvgjsStop1459" stopColor="#00aeef" offset="1">
                            </stop></linearGradient>
                    </defs>
                    <g id="SvgjsG1445"
                        transform="matrix(2.4015370188708425,0,0,2.4015370188708425,0,0)" fill="url(#SvgjsLinearGradient1451)">
                        <path xmlns="http://www.w3.org/2000/svg" d="M0 0v104.1h104.1V0zm101.7 101.7H2.4V2.4h99.3z">
                        </path>
                    </g>
                    <g id="SvgjsG1446" transform="matrix(1.8949738310160065,0,0,1.8949738310160065,79.61467185353682,25.576357392365246)" fill="url(#SvgjsLinearGradient1454)">
                        <path d="M17.021 40.897999999999996 l3.3398 0 c-0.52734 7.0605 4.2773 12.363 17.813 3.6621 l4.3945 0 l-2.7539 11.953 c-14.854 8.5547 -36.885 5.9766 -33.662 -15.615 l-3.3105 0 c0.17578 -0.79102 0.35156 -1.7285 0.58594 -2.7539 c2.9883 -13.096 12.979 -22.617 26.895 -22.617 c7.6758 0 12.1 2.1973 14.736 4.0137 l-2.8418 12.246 l-4.7168 0 c-10.605 -11.426 -19.775 0.23438 -20.479 9.1113 z">
                        </path>
                    </g>
                    <g id="SvgjsG1447" transform="matrix(1.378930014188865,0,0,1.378930014188865,25,149.44567375331405)" fill="url(#SvgjsLinearGradient1457)">
                        <path d="M5.36 39.92 c-2.96 0 -5.36 -2.4 -5.36 -5.36 l0 -17.76 c0 -2.96 2.4 -5.36 5.36 -5.36 s5.36 2.4 5.36 5.36 l0 1.6 l-3.8 0 l0 -1.6 c0 -0.84 -0.72 -1.56 -1.56 -1.56 s-1.56 0.72 -1.56 1.56 l0 17.76 c0 0.84 0.72 1.56 1.56 1.56 s1.56 -0.72 1.56 -1.56 l0 -2.56 l3.8 0 l0 2.56 c0 2.96 -2.4 5.36 -5.36 5.36 z M23.68 40.08 l-4.08 0 l-2.2 -6.04 l-0.88 0 l0 6.04 l-3.8 0 l0 -28.64 l5.96 0 c2.64 0 4.76 2.12 4.76 4.76 l0 13.08 c0 1.72 -0.88 3.2 -2.24 4.04 z M16.52 15.239999999999998 l0 15 l2.16 0 c0.52 0 0.96 -0.44 0.96 -0.96 l0 -13.08 c0 -0.52 -0.44 -0.96 -0.96 -0.96 l-2.16 0 z M29.48 11.36 l0 28.48 l-3.8 0 l0 -28.48 l3.8 0 z M35.28 34 l0 5.96 l-3.8 0 l0 -28.52 l5.92 0 c2.64 0 4.76 2.16 4.76 4.8 l0 13 c0 2.64 -2.12 4.76 -4.76 4.76 l-2.12 0 z M35.28 15.239999999999998 l0 14.96 l2.12 0 c0.56 0 0.96 -0.4 0.96 -0.96 l0 -13 c0 -0.56 -0.4 -1 -0.96 -1 l-2.12 0 z M58 11.36 l0 3.84 l-4.76 0 l0 24.84 l-3.84 0 l0 -24.84 l-5.24 0 l0 -3.84 l13.84 0 z M64.24000000000001 40.04 c-3 0 -5.4 -2.44 -5.4 -5.4 l0 -17.96 c0 -2.96 2.4 -5.36 5.4 -5.36 c2.96 0 5.36 2.4 5.36 5.36 l0 17.96 c0 2.96 -2.4 5.4 -5.36 5.4 z M64.24000000000001 15.120000000000001 c-0.88 0 -1.56 0.72 -1.56 1.56 l0 17.96 c0 0.88 0.68 1.56 1.56 1.56 c0.84 0 1.56 -0.68 1.56 -1.56 l0 -17.96 c0 -0.84 -0.72 -1.56 -1.56 -1.56 z M82.4 23.72 l0 3.48 l-10.8 0 l0 -3.48 l10.8 0 z M93.72 23.04 c0.88 0.88 1.44 2.08 1.44 3.4 l0 8.76 c0 2.64 -2.16 4.8 -4.8 4.8 l-5.92 0 l-0.04 -28.48 l5.28 0 c2.92 0.12 4.64 2.92 4.6 5.56 l-0.04 3.96 c0 0.72 -0.2 1.4 -0.52 2 z M90.36 36.16 c0.56 0 1 -0.44 1 -0.96 l-0.04 -8.76 c0 -0.56 -0.44 -0.96 -0.96 -0.96 l-2.12 0 l0 10.68 l2.12 0 z M88.2 15.32 l0 6.32 l1.6 0 c0.32 0 0.64 -0.28 0.64 -0.64 l0.04 -3.96 c0 -0.8 -0.4 -1.68 -0.96 -1.72 l-1.32 0 z M108.12 40.08 l-4.08 0 l-2.2 -6.04 l-0.88 0 l0 6.04 l-3.8 0 l0 -28.64 l5.96 0 c2.64 0 4.76 2.12 4.76 4.76 l0 13.08 c0 1.72 -0.88 3.2 -2.24 4.04 z M100.96000000000001 15.239999999999998 l0 15 l2.16 0 c0.52 0 0.96 -0.44 0.96 -0.96 l0 -13.08 c0 -0.52 -0.44 -0.96 -0.96 -0.96 l-2.16 0 z M120.12 40 l-1.44 -9.88 l-4.04 0 l-1.32 9.88 l-3.84 0 l4.32 -28.6 l5.16 0 l5 28.6 l-3.84 0 z M115.16 26.32 l2.96 0 l-1.52 -10.4 z M129.76000000000002 11.36 l0 28.48 l-3.8 0 l0 -28.48 l3.8 0 z M141.04000000000002 33.44 l0.16 -22.16 l3.84 0 l-0.24 28.88 l-5.96 0 l-3.24 -22.36 l0 22.36 l-3.84 0 l0 -28.88 l6.2 0 z">
                        </path>
                    </g>
                </svg></>
        )

    if (styleNumber === 2)
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg viewBox="0 0 250.00000000000003 250.00000000000003"
                    height="250.00000000000003"
                    width="250.00000000000003"
                    style={{
                        marginTop: '1rem',
                        marginLeft: '1rem',
                        marginBottom: '1rem',
                        width: '80px',
                        height: '80px',
                        zIndex: 0,
                        display: 'inline-block',
                        cursor: 'pointer',
                        overflow: 'visible',
                    }}><defs id="SvgjsDefs1444">
                        <linearGradient id="SvgjsLinearGradient1451">
                            <stop id="SvgjsStop1452" stopColor="#2d388a" offset="0">
                                </stop>
                                <stop id="SvgjsStop1453" stopColor="#00aeef" offset="1">
                                    </stop></linearGradient><linearGradient id="SvgjsLinearGradient1454">
                                        <stop id="SvgjsStop1455" stopColor="#2d388a" offset="0">
                                            </stop><stop id="SvgjsStop1456" stopColor="#00aeef" offset="1">
                                                </stop></linearGradient><linearGradient id="SvgjsLinearGradient1457">
                                                    <stop id="SvgjsStop1458" stopColor="#2d388a" offset="0">
                                                    </stop>
                                                    <stop id="SvgjsStop1459" stopColor="#00aeef" offset="1">
                                                        </stop></linearGradient></defs><g id="SvgjsG1445"  
                                                        transform="matrix(2.4015370188708425,0,0,2.4015370188708425,0,0)" fill="url(#SvgjsLinearGradient1451)"><path xmlns="http://www.w3.org/2000/svg" d="M0 0v104.1h104.1V0zm101.7 101.7H2.4V2.4h99.3z"></path></g><g id="SvgjsG1446" transform="matrix(1.8949738310160065,0,0,1.8949738310160065,79.61467185353682,25.576357392365246)" fill="url(#SvgjsLinearGradient1454)"><path d="M17.021 40.897999999999996 l3.3398 0 c-0.52734 7.0605 4.2773 12.363 17.813 3.6621 l4.3945 0 l-2.7539 11.953 c-14.854 8.5547 -36.885 5.9766 -33.662 -15.615 l-3.3105 0 c0.17578 -0.79102 0.35156 -1.7285 0.58594 -2.7539 c2.9883 -13.096 12.979 -22.617 26.895 -22.617 c7.6758 0 12.1 2.1973 14.736 4.0137 l-2.8418 12.246 l-4.7168 0 c-10.605 -11.426 -19.775 0.23438 -20.479 9.1113 z"></path></g><g id="SvgjsG1447"  transform="matrix(1.378930014188865,0,0,1.378930014188865,25,149.44567375331405)" fill="url(#SvgjsLinearGradient1457)"><path d="M5.36 39.92 c-2.96 0 -5.36 -2.4 -5.36 -5.36 l0 -17.76 c0 -2.96 2.4 -5.36 5.36 -5.36 s5.36 2.4 5.36 5.36 l0 1.6 l-3.8 0 l0 -1.6 c0 -0.84 -0.72 -1.56 -1.56 -1.56 s-1.56 0.72 -1.56 1.56 l0 17.76 c0 0.84 0.72 1.56 1.56 1.56 s1.56 -0.72 1.56 -1.56 l0 -2.56 l3.8 0 l0 2.56 c0 2.96 -2.4 5.36 -5.36 5.36 z M23.68 40.08 l-4.08 0 l-2.2 -6.04 l-0.88 0 l0 6.04 l-3.8 0 l0 -28.64 l5.96 0 c2.64 0 4.76 2.12 4.76 4.76 l0 13.08 c0 1.72 -0.88 3.2 -2.24 4.04 z M16.52 15.239999999999998 l0 15 l2.16 0 c0.52 0 0.96 -0.44 0.96 -0.96 l0 -13.08 c0 -0.52 -0.44 -0.96 -0.96 -0.96 l-2.16 0 z M29.48 11.36 l0 28.48 l-3.8 0 l0 -28.48 l3.8 0 z M35.28 34 l0 5.96 l-3.8 0 l0 -28.52 l5.92 0 c2.64 0 4.76 2.16 4.76 4.8 l0 13 c0 2.64 -2.12 4.76 -4.76 4.76 l-2.12 0 z M35.28 15.239999999999998 l0 14.96 l2.12 0 c0.56 0 0.96 -0.4 0.96 -0.96 l0 -13 c0 -0.56 -0.4 -1 -0.96 -1 l-2.12 0 z M58 11.36 l0 3.84 l-4.76 0 l0 24.84 l-3.84 0 l0 -24.84 l-5.24 0 l0 -3.84 l13.84 0 z M64.24000000000001 40.04 c-3 0 -5.4 -2.44 -5.4 -5.4 l0 -17.96 c0 -2.96 2.4 -5.36 5.4 -5.36 c2.96 0 5.36 2.4 5.36 5.36 l0 17.96 c0 2.96 -2.4 5.4 -5.36 5.4 z M64.24000000000001 15.120000000000001 c-0.88 0 -1.56 0.72 -1.56 1.56 l0 17.96 c0 0.88 0.68 1.56 1.56 1.56 c0.84 0 1.56 -0.68 1.56 -1.56 l0 -17.96 c0 -0.84 -0.72 -1.56 -1.56 -1.56 z M82.4 23.72 l0 3.48 l-10.8 0 l0 -3.48 l10.8 0 z M93.72 23.04 c0.88 0.88 1.44 2.08 1.44 3.4 l0 8.76 c0 2.64 -2.16 4.8 -4.8 4.8 l-5.92 0 l-0.04 -28.48 l5.28 0 c2.92 0.12 4.64 2.92 4.6 5.56 l-0.04 3.96 c0 0.72 -0.2 1.4 -0.52 2 z M90.36 36.16 c0.56 0 1 -0.44 1 -0.96 l-0.04 -8.76 c0 -0.56 -0.44 -0.96 -0.96 -0.96 l-2.12 0 l0 10.68 l2.12 0 z M88.2 15.32 l0 6.32 l1.6 0 c0.32 0 0.64 -0.28 0.64 -0.64 l0.04 -3.96 c0 -0.8 -0.4 -1.68 -0.96 -1.72 l-1.32 0 z M108.12 40.08 l-4.08 0 l-2.2 -6.04 l-0.88 0 l0 6.04 l-3.8 0 l0 -28.64 l5.96 0 c2.64 0 4.76 2.12 4.76 4.76 l0 13.08 c0 1.72 -0.88 3.2 -2.24 4.04 z M100.96000000000001 15.239999999999998 l0 15 l2.16 0 c0.52 0 0.96 -0.44 0.96 -0.96 l0 -13.08 c0 -0.52 -0.44 -0.96 -0.96 -0.96 l-2.16 0 z M120.12 40 l-1.44 -9.88 l-4.04 0 l-1.32 9.88 l-3.84 0 l4.32 -28.6 l5.16 0 l5 28.6 l-3.84 0 z M115.16 26.32 l2.96 0 l-1.52 -10.4 z M129.76000000000002 11.36 l0 28.48 l-3.8 0 l0 -28.48 l3.8 0 z M141.04000000000002 33.44 l0.16 -22.16 l3.84 0 l-0.24 28.88 l-5.96 0 l-3.24 -22.36 l0 22.36 l-3.84 0 l0 -28.88 l6.2 0 z"></path></g></svg>
                <Typography style={{ display: 'inline', marginLeft: '1rem', fontWeight: '600' }}>Pensando en Finanzas, Pensando en Cripto Monedas</Typography>
            </div>
        )

}

export default Logo; 