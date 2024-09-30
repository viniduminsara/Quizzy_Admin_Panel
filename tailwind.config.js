/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#08FE90',
                secondary: '#828282',
                accent: '#49CDFF',
                accent2: '#1884FF',
            },
            backgroundImage: {
                'gradient': 'linear-gradient(to right, #1884FF, #49CDFF)',
            },
            boxShadow: {
                right_sm: "4px 0 6px -1px rgba(0, 0, 0, 0.1), 4px 0 4px -1px rgba(0, 0, 0, 0.06)",
                right_lg: "10px 0 15px -3px rgba(0, 0, 0, 0.1), 10px 0 10px -3px rgba(0, 0, 0, 0.05)",
            },
        },
    },
    plugins: [],
}

