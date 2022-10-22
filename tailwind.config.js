const defaultTheme = require('tailwindcss/defaultTheme')
const colors       = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix    : 'tw-',
    content   : [
        'resources/js/pages/*.vue',
        'resources/js/components/**/*.vue',
        'resources/css/app.scss',
        'resources/js/lang/*.js',
        'resources/js/utils/constants.js'
    ],
    darkMode  : 'class', // or 'media' or 'class'
    theme     : {
        extend: {
            borderOpacity: {
                '38': '0.38',
            },
            colors       : {
                'primary'     : {
                    '50'     : '#000000',
                    '100'    : '#000000',
                    '200'    : '#000000',
                    '300'    : '#000000',
                    '400'    : '#000000',
                    'hover'  : '#000000',
                    'DEFAULT': '#000000',
                    '500'    : '#000000',
                    '600'    : '#000000',
                    '700'    : '#000000',
                    '800'    : '#000000',
                    '900'    : '#000000',
                },
                'accent-2'    : {
                    '50'     : '#000000',
                    '100'    : '#000000',
                    '200'    : '#000000',
                    '300'    : '#000000',
                    '400'    : '#000000',
                    'hover'  : '#000000',
                    'DEFAULT': '#000000',
                    '500'    : '#000000',
                    '600'    : '#000000',
                    '700'    : '#000000',
                    '800'    : '#000000',
                    '900'    : '#000000',
                },
                'accent-3'    : {
                    '50'     : '#000000',
                    '100'    : '#000000',
                    '200'    : '#000000',
                    '300'    : '#000000',
                    '400'    : '#000000',
                    'hover'  : '#000000',
                    'DEFAULT': '#000000',
                    '500'    : '#000000',
                    '600'    : '#000000',
                    '700'    : '#000000',
                    '800'    : '#000000',
                    '900'    : '#000000',
                },
                'dark-shades' : {
                    '50'     : '#000000',
                    '100'    : '#000000',
                    '200'    : '#000000',
                    '300'    : '#000000',
                    '400'    : '#000000',
                    'hover'  : '#000000',
                    'DEFAULT': '#000000',
                    '500'    : '#000000',
                    '600'    : '#000000',
                    '700'    : '#000000',
                    '800'    : '#000000',
                    '900'    : '#000000'
                },
                'light-shades': {
                    '50'     : '#000000',
                    '100'    : '#000000',
                    '200'    : '#000000',
                    '300'    : '#000000',
                    '400'    : '#000000',
                    'hover'  : '#000000',
                    'DEFAULT': '#000000',
                    '500'    : '#000000',
                    '600'    : '#000000',
                    '700'    : '#000000',
                    '800'    : '#000000',
                    '900'    : '#000000'
                },
                'green'       : {
                    '50'     : '#000000',
                    '100'    : '#000000',
                    '200'    : '#000000',
                    '300'    : '#000000',
                    '400'    : '#000000',
                    'hover'  : '#000000',
                    'DEFAULT': '#000000',
                    '500'    : '#000000',
                    '600'    : '#000000',
                    '700'    : '#000000',
                    '800'    : '#000000',
                    '900'    : '#000000'
                },
                'default-gray': '#F9FCFF',
                orange        : colors.orange,
                'dark-blue'   : '#000000'
            },
            fontFamily   : {
                'montserrat'     : ['Montserrat', ...defaultTheme.fontFamily.sans],
                'hammersmith-one': ['"Hammersmith One"', ...defaultTheme.fontFamily.sans],
            },
            height       : {
                '30vh' : '30vh',
                '50vh' : '50vh',
                '75vh' : '75vh',
                '85vh' : '85vh',
                '150vh': '150vh',
                '105'  : '28rem',
                '108'  : '30rem',
                '112'  : '33rem',
                '116'  : '35rem'
            },
            minHeight    : {
                '80': '20rem',
                '96': '24rem'
            },
            width        : {
                '50vw' : '50vw',
                '70vw' : '70vw',
                '3/4'  : '75%',
                '6/5'  : '120%',
                '1/7'  : '14.285714285714285%',
                '2/7'  : '28.57142857142857%',
                '3/7'  : '42.857142857142854%',
                '4/7'  : '57.14285714285714%',
                '5/7'  : '71.42857142857143%',
                '6/7'  : '85.71428571428571%',
                '1/8'  : '12.5%',
                '2/8'  : '25%',
                '3/8'  : '37.5%',
                '4/8'  : '50%',
                '5/8'  : '62.5%',
                '6/8'  : '75%',
                '7/8'  : '87.5%',
                '1/9'  : '11.11111111111111%',
                '2/9'  : '22.22222222222222%',
                '3/9'  : '33.33333333333333%',
                '4/9'  : '44.44444444444444%',
                '5/9'  : '55.55555555555556%',
                '6/9'  : '66.66666666666666%',
                '7/9'  : '77.77777777777779%',
                '8/9'  : '88.88888888888889%',
                '1/10' : '10%',
                '2/10' : '20%',
                '3/10' : '30%',
                '4/10' : '40%',
                '5/10' : '50%',
                '6/10' : '60%',
                '7/10' : '70%',
                '8/10' : '80%',
                '9/10' : '90%',
                '1/11' : '9.090909090909092%',
                '2/11' : '18.181818181818183%',
                '3/11' : '27.27272727272727%',
                '4/11' : '36.36363636363637%',
                '5/11' : '45.45454545454545%',
                '6/11' : '54.54545454545454%',
                '7/11' : '63.63636363636363%',
                '8/11' : '72.72727272727273%',
                '9/11' : '81.81818181818183%',
                '10/11': '90.9090909090909%'
            },
            minWidth     : {
                '36': '9rem'
            },
            maxWidth     : {
                '3/4': '75%',
                '24' : '6rem'
            },
            scale        : {
                '-1': '-1.0',
                '66': '.66',
            },
            screens      : {
                '3xl': '2000px',
                '4xl': '2500px'
            },
            zIndex       : {
                '98' : 98,
                '99' : 99,
                'max': 999
            },
        },
        fill  : theme => ({
            'primary'     : theme('colors.primary'),
            'accent-2'    : theme('colors.accent-2'),
            'accent-3'    : theme('colors.accent-3'),
            'light-shades': theme('colors.light-shades'),
            'dark-shades' : theme('colors.dark-shades'),
            'gray'        : colors.gray,
            'white'       : colors.white,
            'black'       : colors.black
        }),
        stroke: theme => ({
            'primary'     : theme('colors.primary'),
            'accent-2'    : theme('colors.accent-2'),
            'accent-3'    : theme('colors.accent-3'),
            'light-shades': theme('colors.light-shades'),
            'dark-shades' : theme('colors.dark-shades'),
            'gray'        : colors.gray,
            'white'       : colors.white,
            'black'       : colors.black
        })
    },
    variants  : {
        extend: {
            borderColor    : ['focus', 'active'],
            borderWidth    : ['focus'],
            fill           : ['hover', 'group-hover'],
            fontWeight     : ['hover'],
            textColor      : ['active'],
            backgroundColor: ['active', 'disabled', 'even', 'odd'],
            cursor         : ['disabled', 'hover']
        },
    }, plugins: [
        function ({addBase, theme}) {
            function extractColorVars(colorObj, colorGroup = '') {
                return Object.keys(colorObj).reduce((vars, colorKey) => {
                    const value = colorObj[colorKey];

                    let newVars;
                    if (typeof value === 'string') {
                        if (colorKey !== "DEFAULT") {
                            newVars = {[`--color${colorGroup}-${colorKey}`]: value};
                        } else {
                            newVars = {[`--color${colorGroup}`]: value};
                        }
                    } else {
                        newVars = extractColorVars(value, `-${colorKey}`);
                    }
                    return {...vars, ...newVars};
                }, {});
            }

            addBase({
                ':root': extractColorVars(theme('colors')),
            });
        },
    ],
}
