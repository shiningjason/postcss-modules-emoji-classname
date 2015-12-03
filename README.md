# CSS Modules: Emoji Classname
> A CSS Modules transform exported classname into emoji classname

Transforms:

```css
:export {
  continueButton: __buttons_continueButton_djd347adcxz9;
}
.__buttons_continueButton_djd347adcxz9 {
  color: green;
}
```

into:

```css
:export {
  continueButton: 💎;
}
.💎 {
  color: green;
}
```

## Install
```sh
npm install --save-dev postcss-modules-emoji-classname
```

## Usage
```
import postcss from 'postcss';
import values from 'postcss-modules-values';
import localByDefault from 'postcss-modules-local-by-default';
import extractImports from 'postcss-modules-extract-imports';
import scope from 'postcss-modules-scope';
import emojiClassname from 'postcss-modules-emoji-classname';
import autoprefixer from 'autoprefixer';

postcss([
  values,
  localByDefault,
  extractImports,
  scope,
  emojiClassname,
  autoprefixer({ browsers: ['last 2 versions'] })
]);

```

## License
The MIT License (MIT)

Copyright (c) 2015 Jason Chung

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
