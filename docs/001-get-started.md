# get started
- https://create-react-app.dev/docs/custom-templates
- https://github.com/facebook/create-react-app/tree/master/packages/cra-template


## debug
```shell
npx create-react-app my-app --template file:/Users/feizheng/github/cra-template-nx
```

## main/template.json
> 实际上是缺少 template.json 在 package.json 中的指向。
~~~
Error: Cannot find module 'cra-template-nx'
~~~

- https://github.com/facebook/create-react-app/issues/8893
