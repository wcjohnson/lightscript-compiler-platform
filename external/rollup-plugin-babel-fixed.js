import { transform } from '@babel/core';

export default function babel(options) {
  const extensionRegExp = new RegExp(`.js$`);
  const filter = id => extensionRegExp.test(id);

	return {
		name: 'babel-fixed',

		transform(code, id) {
      if (!filter(id)) return null;

			const localOpts = {
				filename: id,
				...options,
			};

			const transformed = transform(code, localOpts);

			if (!transformed) {
				return { code };
			}

			return {
				code: transformed.code,
				map: transformed.map,
			};
		},
	};
}
