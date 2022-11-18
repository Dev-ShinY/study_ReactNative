# Study ReactNative
> nomadcoder 강의를 들으며 배운 내용을 정리 합니다.
> 대체적으로 react native의 기본적인 지식을 정리합니다.
---

- #### [snack.expo.dev](https://snack.expo.dev/) : 브라우저에서 React 어플리케이션을 만들 수 있게 해주는 온라인 코드에디터
```
expo 애플리케이션의 QR 코드를 스캔하면 코드를 미리 볼 수 있음.
또는 web에서도 미리보기가 가능(iOS, Android, Web)
```

![img](https://user-images.githubusercontent.com/20761166/61547097-b1c62280-aa18-11e9-89f0-7e901eb05297.png)


- ### html이 아니기 때문에 html에서 제공하는 태그들을 사용할 수 없음.
    * 일반적이진 않지만 얼추 대응하는 것
        + html: div -> react native : ***View*** `import { View } from "react-native"`
        + html: span -> react native : ***Text*** `import { Text } from "react-native"`
    * css
        + style 적용 방법
            ```javascript
                <Text style={styles.text}>Hello world</Text>
            ```
            ```javascript

                const styles = StyleSheet.create({
                    container: {
                        flex: 1,
                        backgroundColor: "#fff",
                        alignItems: "center",
                        justifyContent: "center",
                    },

                    text: {
                        fontSize: 28,
                        color: "red",
                    },
                });
            ```
* ### 그 외의 컴포넌트를 확인하기 위한 자료 (React Native Package)
> [reactnative.dev/docs](https://reactnative.dev/docs/components-and-apis)

* ### Statusbar
![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FzawD9%2Fbtq0fjT0VyI%2FINFQTuKBBznKldIR6cuEE1%2Fimg.png)
```javascript
    <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
```

* ### AsyncStorage란,
> 암호화 되지 않은 비동기적인 데이터를 관리하는 Key-Value 저장 시스템입니다.
앱 전역에서 사용할 수 있으며, LocalStorage 대신 사용해야 합니다.

이제는 자체 지원을 중단하고 community packages에 오픈 소스로 만들어진 AsyncStorage를 사용.

* ### flex
> 다양한 스크린에 너비와 높이를 정적으로 지정한다면(ex: width: 200, height: 200) 같은 css가 적용된 화면을 보는 사람이 많지 않을 것이다. 따라서 flex 방식을 사용하는 것을 선호해야한다.

```javascript
<View style={{ flex: 1, flexDirection: "row" }}>
    <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
    <View style={{ flex: 1, backgroundColor: "teal" }}></View>
    <View style={{ flex: 1, backgroundColor: "orange" }}></View>
</View>
```

