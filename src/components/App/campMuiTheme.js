export default {
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {xs: 0, lg: 1280, sm: 600, xl: 1920, md: 960},
    },
    typography: {
        useNextVariants: true,
        h5: {
            color: 'rgba(0, 0, 0, 0.87)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.35417em',
            fontSize: '1.5rem',
            fontWeight: 400,
        },
        h3: {
            marginLeft: '-.02em',
            color: 'rgba(0, 0, 0, 0.54)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.13333em',
            fontSize: '2.8125rem',
            fontWeight: 400,
        },
        fontWeightLight: 300,
        h2: {
            marginLeft: '-.02em',
            color: 'rgba(0, 0, 0, 0.54)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            letterSpacing: '-.02em',
            lineHeight: '1.30357em',
            fontSize: '3.5rem',
            fontWeight: 400,
        },
        h1: {
            marginLeft: '-.04em',
            color: 'rgba(0, 0, 0, 0.54)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            letterSpacing: '-.04em',
            lineHeight: '1.14286em',
            fontSize: '7rem',
            fontWeight: 300,
        },
        fontWeightRegular: 400,
        h4: {
            color: 'rgba(0, 0, 0, 0.54)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.20588em',
            fontSize: '2.125rem',
            fontWeight: 400,
        },
        button: {
            textTransform: 'uppercase',
            color: 'rgba(0, 0, 0, 0.87)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '0.875rem',
            fontWeight: 500,
        },
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        body1: {
            color: 'rgba(0, 0, 0, 0.87)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.71429em',
            fontSize: '0.875rem',
            fontWeight: 500,
        },
        caption: {
            color: 'rgba(0, 0, 0, 0.54)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.375em',
            fontSize: '0.75rem',
            fontWeight: 400,
        },
        fontSize: 14,
        fontWeightMedium: 500,
        h6: {
            color: 'rgba(0, 0, 0, 0.87)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.16667em',
            fontSize: '1.3125rem',
            fontWeight: 500,
        },
        subtitle1: {
            color: 'rgba(0, 0, 0, 0.87)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.5em',
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            color: 'rgba(0, 0, 0, 0.87)',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.46429em',
            fontSize: '0.875rem',
            fontWeight: 400,
        },
    },
    transitions: {
        easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
            standard: 300,
            short: 250,
            enteringScreen: 225,
            shorter: 200,
            leavingScreen: 195,
            shortest: 150,
            complex: 375,
        },
    },
    zIndex: {
        modal: 1300,
        snackbar: 1400,
        drawer: 1200,
        appBar: 1100,
        mobileStepper: 1000,
    },
    shape: {borderRadius: 4},
    spacing: {unit: 8},
    palette: {
        tonalOffset: 0.2,
        background: {paper: '#fff', default: '#fafafa'},
        contrastThreshold: 3,
        grey: {
            '50': '#fafafa',
            '100': '#f5f5f5',
            '200': '#eeeeee',
            '300': '#e0e0e0',
            '400': '#bdbdbd',
            '500': '#9e9e9e',
            '600': '#757575',
            '700': '#616161',
            '800': '#424242',
            '900': '#212121',
            A700: '#616161',
            A100: '#d5d5d5',
            A400: '#303030',
            A200: '#aaaaaa',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
        secondary: {
            main: '#757575',
            light: 'rgb(144, 144, 144)',
            dark: 'rgb(81, 81, 81)',
            contrastText: '#fff',
        },
        common: {black: '#000', white: '#fff'},
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        type: 'light',
        action: {
            hoverOpacity: 0.08,
            hover: 'rgba(0, 0, 0, 0.08)',
            selected: 'rgba(0, 0, 0, 0.14)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            active: 'rgba(0, 0, 0, 0.54)',
        },
        primary: {
            main: '#546E7A',
            light: 'rgb(118, 139, 148)',
            dark: 'rgb(58, 77, 85)',
            contrastText: '#fff',
        },
    },
    // Overrides for global MUI Components
    overrides: {},
};