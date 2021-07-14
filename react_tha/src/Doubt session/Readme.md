# React

> <strong>CSS MODULES</strong>

- `[fileName].module.css`
- `import stles from Button.module.css`

- How to use
    [ `className={styles.className}` ] 

- ref- https://medium.com/@ralph1786/using-css-modules-in-react-app-c2079eadbb87

- ref2  https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

<br>
<hr>
<br>

> <strong>useEffect()</strong>

- we pass a function inside useEfect()

- The callback functions waht should happen when some component changes

- clean UP in `useEffect` just add return at the bottom of `useEffect()`

- This function runs before any thing happens in useEffect callback- to clean up the previous values
- return () {
    console.log(`reuturn from resouce`)
}


<code>
useEffect(() => {
    console.log("render")

    return () {
        console.log("clearing the prev values, clean up function")
    }
})
</code>

<br>
<hr>
<br>

> <strong> Deploy </strong>

- https://create-react-app.dev/docs/deployment/