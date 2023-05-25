module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        'sr-only',
        'animate-spin',
        {
            pattern: /left-.+/,
        },
        {
            pattern: /bg-.+/,
        },
        {
            pattern: /text-.+/,
        },
        {
            pattern: /col-span-.+/,
        },
    ],
    theme: { debugScreens: { position: ['top', 'right'] } },
    important: true,
}
