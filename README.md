# practice-tailwind-typescript

## Setup
[Tailwind Init](https://tailwindcss.com/docs/guides/create-react-app)
1. `yarn create vite`
2. `yarn add -D tailwindcss postcss autoprefixer`
3. `npx tailwindcss init -p`
4. Configure your template paths `tailwind.config.js`
5. Add the Tailwind directives to your CSS `./src/index.css`
6. Run project `yarn dev`

## Manual
1. color: `text-black bg-blue border-red shadow-black`
2. effect: `hover:text-blue rounded shadow-xl`
3. layout: `grid flex block md:flex relative absolute`
4. size: `m-2 p-4 min-w-[25%] min-w-[100px]` <!-- m-2: 4px; p-4: 16px -->
5. text style: `text text-xl text-white font-semibold uppercase`