import postcss from 'postcss';

import transformIntoEmoji from './transformIntoEmoji';

export default postcss.plugin('postcss-modules-emoji-classname', (options) => (css) => {
  const exportedEmojis = {};

  css.walkRules((rule) => {
    if (rule.selector === ':export') {
      rule.walkDecls((decl) => {
        const classNames = decl.value.split(' ');
        const classEmojis = classNames.map((className) => {
          if (!/^_/.test(className)) return className;
          const emoji = transformIntoEmoji(className);
          exportedEmojis[className] = emoji;
          return emoji;
        });
        decl.value = classEmojis.join(' ');
      });
    }
  });

  const exportedClassNames = Object.keys(exportedEmojis);
  if (exportedClassNames.length === 0) return;

  css.walkRules((rule) => {
    const original = rule.selector;
    exportedClassNames.forEach((className) => {
      rule.selector = rule.selector.replace(
        new RegExp(`${className}([^a-zA-Z0-9_-]|$)`, 'g'),
        `${exportedEmojis[className]}$1`
      );
    });
  });
});
