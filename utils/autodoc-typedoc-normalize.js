const fs = require('fs');
const fromCWD = require('from-cwd');

const toolsTypeDocPath = fromCWD('.cache/typedoc.json');
const toolsTypeDocNormalizedPath = fromCWD('.cache/typedoc.normalized.json');
const toolsTypeDoc = JSON.parse(
	fs.readFileSync(toolsTypeDocPath).toString()
).children.reduce((acc, module) => {
	if (module.name === 'index') {
		return acc;
	} else {
		module.children.forEach((child) => {
			acc[`${module.name}#${child.name}`] = child;
		});
	}
	return acc;
}, {});

fs.writeFileSync(
	toolsTypeDocNormalizedPath,
	JSON.stringify(toolsTypeDoc, undefined, '\t')
);
