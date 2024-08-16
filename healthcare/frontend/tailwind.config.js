/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
		  colors: {
			white: "#fff",
			gray: {
			  "100": "#431c2d",
			  "200": "#2a2739",
			  "300": "#282828",
			  "400": "#291e40",
			  "500": "#161d26",
			  "600": "#10152f",
			  "700": "#260f0f",
			  "800": "#050708",
			},
			crimson: "#f0484d",
			darkslategray: {
			  "100": "#2e3552",
			  "200": "#2b3546",
			  "300": "#1c365b",
			  "400": "#1f3654",
			  "500": "#263238",
			  "600": "#052b4e",
			  "700": "rgba(31, 54, 84, 0.82)",
			},
			darkslateblue: {
			  "100": "#19427d",
			  "200": "#21214b",
			},
			skyblue: {
			  "100": "#86e0ff",
			  "200": "#8ac2e4",
			},
			deepskyblue: {
			  "100": "#4ad0ff",
			  "200": "#179ecc",
			},
			aliceblue: {
			  "100": "#f3f8fb",
			  "200": "#ecf8fd",
			  "300": "#ebf4fc",
			  "400": "#e6eff7",
			},
			lightsteelblue: {
			  "100": "#bac5e2",
			  "200": "#9dafc7",
			  "300": "#97a9c1",
			},
			steelblue: {
			  "100": "#7e78aa",
			  "200": "#1f8dcd",
			  "300": "#53739d",
			  "400": "#4c6aac",
			  "500": "#4069a3",
			  "600": "#2c5ea3",
			  "700": "#1e6f88",
			  "800": "#17497d",
			},
			dodgerblue: "#598cff",
			cadetblue: {
			  "100": "#85a8a7",
			  "200": "#0c9cbd",
			},
			khaki: {
			  "100": "#f3e281",
			  "200": "rgba(255, 209, 123, 0.59)",
			},
			firebrick: "#c92e39",
			lightslategray: "#9999b3",
			royalblue: "#407bff",
			lightcyan: "#d0f7ff",
			black: "#000",
			lightgray: "#c8cacb",
			sienna: {
			  "100": "#642424",
			  "200": "rgba(173, 90, 37, 0.71)",
			},
			dimgray: {
			  "100": "#596975",
			  "200": "#755377",
			  "300": "#5b3c5c",
			},
			darkgray: "rgba(172, 179, 171, 0.84)",
			lavender: "#d0e9ff",
			azure: "#e3f7f5",
			powderblue: {
			  "100": "#b1dbe0",
			  "200": "#9ed1d7",
			},
			gainsboro: "#e6e6e6",
			whitesmoke: "#f3f1f1",
			thistle: "#cdc4fd",
			indianred: "#d5676b",
		  },
		  spacing: {},
		  fontFamily: {
			poppins: "Poppins",
			inherit: "inherit",
			mont: "Mont",
		  },
		  borderRadius: {
			"16xl": "35px",
			"6xl": "25px",
			"10xs": "3px",
			"4xs": "9px",
		  },
		},
		fontSize: {
		  base: "16px",
		  "2xl": "21px",
		  mid: "17px",
		  "2xs": "11px",
		  "7xl": "26px",
		  xl: "20px",
		  "5xl": "24px",
		  lgi: "19px",
		  "9xl": "28px",
		  "3xl": "22px",
		  "11xl": "30px",
		  lg: "18px",
		  mini: "15px",
		  smi: "13px",
		  "25xl": "44px",
		  "16xl": "35px",
		  "19xl": "38px",
		  "4xl": "23px",
		  "20xl": "39px",
		  "12xl": "31px",
		  "17xl": "36px",
		  "10xl": "29px",
		  inherit: "inherit",
		},
		screens: {
		  mq1425: {
			raw: "screen and (max-width: 1425px)",
		  },
		  mq1400: {
			raw: "screen and (max-width: 1400px)",
		  },
		  mq1350: {
			raw: "screen and (max-width: 1350px)",
		  },
		  mq1275: {
			raw: "screen and (max-width: 1275px)",
		  },
		  mq1250: {
			raw: "screen and (max-width: 1250px)",
		  },
		  mq1225: {
			raw: "screen and (max-width: 1225px)",
		  },
		  lg: {
			max: "1200px",
		  },
		  mq1125: {
			raw: "screen and (max-width: 1125px)",
		  },
		  mq1100: {
			raw: "screen and (max-width: 1100px)",
		  },
		  mq1050: {
			raw: "screen and (max-width: 1050px)",
		  },
		  mq825: {
			raw: "screen and (max-width: 825px)",
		  },
		  mq800: {
			raw: "screen and (max-width: 800px)",
		  },
		  mq750: {
			raw: "screen and (max-width: 750px)",
		  },
		  mq450: {
			raw: "screen and (max-width: 450px)",
		  },
		},
	  },
	  corePlugins: {
		preflight: false,
	  },
	plugins: [],
  }