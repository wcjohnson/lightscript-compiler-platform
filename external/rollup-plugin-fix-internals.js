const fixedImport = '\0fixed_import';
const assertImport = '\0assert_import';
const osCode = `
export function isatty() { return false; }

export default {
	isatty: isatty
}
`
const assertCode = `
export default function assert(arg, msg) {
	if (!arg) {
		throw new Error("Assertion failed" + (msg ? (': ' + msg) : ''))
	}
}
`

export default function fixInternals(options) {
	return {
		name: 'fixInternals',

		resolveId(importee) {
			if (importee === 'os' || importee === 'fs' || importee === 'util' || importee === 'tty' || importee === 'path') {
				return fixedImport;
			}
			if (importee === 'assert') {
				return assertImport;
			}
		},
		load(id) {
			if (id === fixedImport) return osCode;
			if (id === assertImport) return assertCode;
			return null;
		}
	};
}
