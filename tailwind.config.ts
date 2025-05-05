
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(215 20% 25%)',
				input: 'hsl(215 25% 27%)',
				ring: 'hsl(250 50% 60%)',
				background: 'hsl(217 33% 17%)',
				foreground: 'hsl(210 40% 98%)',
				primary: {
					DEFAULT: 'hsl(250 91% 64%)',
					foreground: 'hsl(0 0% 98%)'
				},
				secondary: {
					DEFAULT: 'hsl(215 25% 27%)',
					foreground: 'hsl(210 40% 98%)'
				},
				destructive: {
					DEFAULT: 'hsl(0 84% 60%)',
					foreground: 'hsl(210 40% 98%)'
				},
				muted: {
					DEFAULT: 'hsl(215 25% 27%)',
					foreground: 'hsl(215 20% 70%)'
				},
				accent: {
					DEFAULT: 'hsl(215 25% 27%)',
					foreground: 'hsl(210 40% 98%)'
				},
				popover: {
					DEFAULT: 'hsl(217 33% 17%)',
					foreground: 'hsl(210 40% 98%)'
				},
				card: {
					DEFAULT: 'hsl(216 28% 20%)',
					foreground: 'hsl(210 40% 98%)'
				},
				success: {
					DEFAULT: 'hsl(142 71% 45%)',
					foreground: 'hsl(0 0% 98%)'
				},
				warning: {
					DEFAULT: 'hsl(38 92% 50%)',
					foreground: 'hsl(0 0% 98%)'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
