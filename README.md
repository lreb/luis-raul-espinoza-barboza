# luis-raul-espinoza-barboza
Personal profile

see
/documentation/index.html

 npm run build && mkdir -p docs && cp -r dist/* docs/


To rename the output folder after running the build command, you can use the `mv` command. Here is an example:

```sh
npm run build && mkdir -p docs && cp -r dist/* docs/ && rm dist -r 
```

Replace `new-folder-name` with your desired folder name.