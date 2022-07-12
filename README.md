## Big Words

**Syntax Parser**

人讀的JavaScript程式語言翻譯成電腦儲存的函數、變數，這中間的翻譯過程叫做「Syntax parser」。

**Lexical Environment**

程式所在的位置。

```js
function hello() {
    var a = "hello world";
}
```

上例中的`a`存在於`hello()`之中，所以`a`的Lexical environment就是`hello()`
 

**Execution Context**

管理程式中的數個Lexical environment，決定哪個正在運作。

**Name/Value Pair**
同一個Name可以被定義多次，但是如果在同一個Context之下，同一個Name只會有一個Value。

**Object**
一系列Name/Value Pair的集合。

**Execution Context (Global)**
JavaScript引擎將程式碼包裝成Execution Context，當中最基本的Execution Context就是Global Execution Context，Global表示任何地方皆可存取。
Global Execution Context主要建立兩項東西。
* Global Object (`window`)
* `this` (=`window`)
這兩樣東西無處不在，因為所有的程式都是包在Global Execution Context之下。

**Execution Context is Created (Creation Phase)**
Execution Context建立的時候一共有2個階段，其中一個叫做Creation Phase。
當在Creation Phase時，有3個東西被建立：Global Object, `this`, Outer Environment。
並且，Creation Phase會紀錄變數與函數是在哪裡被建立的，然後分配記憶體空間給變數與函數，這個步驟就叫做Hoisting。
※Hoisting: Variables/Functions Setup

當Hoisting函數時，他可以很好的在這個階段存他，所以函數可以被提前呼叫。
但是當Hoisting變數時，因為除非JS跑完一整份文件，不然他無法知道變數最終的結果，所以無法在Creation Phase得知，因此，提前呼叫變數時，JS Engine會給他一個Placeholder叫做`undefined`（因為所有JS變數的初始值都是`undefined`）。

**Execution Context is Created (Execution Phase)**
在Execution Phase，已經擁有了Creation Phase所建立的Global Object, `this`, Outer Environment，並且執行程式碼。

**Single Threaded**
意思是一次只做一個指令。

**Synchronous**
一次一件事，並且按照順序。程式一次執行一行，並且依照撰寫的順序由上往下執行。

**Invocation**
執行函式，呼叫函式，等於`()`。

**Variable Environment**
變數存活的地方，以及他如何跟其他東西產生關連的記憶空間。

**Scope**
能存取這個變數的地方。

**Asynchronous**
一次多個，程式引擎一次同時處理多道指令。
瀏覽器有JS Engine、Render Engine、HTTP Request等等多個功能，當瀏覽器運作時，JS Engine與Render Engine會Async運作（會在同一個時間點同時運作這兩個，不會等到一個做完再換下一個），但是如果只單純看JS Engine的話，JavaScript是sync而非async。

但是，當實作一個按鈕點擊事件時，因為某部分會是JS Engine以外的瀏覽器功能在做事，所以按鈕點擊事件會是async。
1. 首先，當瀏覽器一進入頁面，JS會排出Execution Queue，並且依序執行。
2. 當Execution Queue都執行完畢，並且清空後，JS Engine會去看Event Queue。
3. 如果Event Queue有放內容的話，比方說有Click事件的話，JS會建立一個叫做ClickHandler()的Execution Context。

**Dynamic Typing**
工程師不用告訴JS Engine變數的型別是什麼，JS Engine自己執行程式然後自己定義他的型別。

**Primitive Type**
儲存單一值的Type（所以Pritimive Type不是Object）。

JS有6種Primitive Type：
* `undefined`：表示存在的欠缺（可以定義一個變數為`undefined`，但是建議不要）
* `null`：表示存在的欠缺（可以定義一個變數為`null`，而且建議使用）
* `boolean`
* `number`：Floating pointer number，可以儲存小數點
* `string`：一連串Character的集合
* `symbol`

**Operator**
`+`、`-`這些運算符號，雖然寫成符號，但是實際上它是一個function。

**Notation**
* Prefix Notation: `+(3, 4)`→`+3 4`
* Posfix Notation: `+(3, 4)`→`3 4+`
* Infix Notation: `+(3, 4)`→`3 + 4`

**Operator Procedence**
哪個Operator Function被第一個呼叫。

**Associativity**
Operator Function被呼叫的順序：由左至右 / 由右至左。

**Coersion**
轉換一個值的型別到另一個型別。

**Object**
Object裡面可以放這些東西：
* Primitive Value："property"
* Object："property"
* Function："method"

**Namespace**
變數與函式的容器。

**First Class Function**
你可以在Function身上做任何可以對型別做的事。

Function是一種特殊型別的Object，他擁有一般Object具備的任何特徵，並且還有一些他自己的獨特屬性。
可以對Function附加Property：Primitive Value / Object / Function。
Function也有一些預設Propery：
* Name：Function不一定需要有Name，沒有Name的Function稱為Anonumous Function。
* Code：Function裡面的程式碼，他是Invocable，意思是說我們執行它時，他會建立完整的Execution Context，並且執行他的內容。

因為JS是First Class Function，所以我們可以把Function當成Primitive Value，把他丟進另一個函數裡面的參數執行。

**Expression**
一坨有回傳值（Return Value）的程式。

* Function Statement：只需要做一些事就好。
* Function Expression：最後需要準備一個Return Value。

**Mutate**
改東西。

**Arguments**
傳遞給這個函式的參數的集合。

**Carriage Return**
按下Enter之後的換行符號。

**Automatic Semicolon**
JS閱讀文件時，如果他看到了`return`後面沒有`;`，但是有換行符號，那JS Engine會幫你加入`;`。

**Whitespace**
程式文件裡的空白，他們是看不見的字符，例如：
* Carriage Returns
* Tabs
* Spaces

他們在執行JS時會被忽視。

**Callback Function**
Callback Function是餵進去某一個主函式，當主函式結束時，會呼叫Callback Function。

**Function Curring**
複製一個Function，保留部分的原始參數。

**Inheritance**
一個物件可以取得另一個物件的Property與Method。

**Classical Inheritance**
C#或是Java指的繼承，很冗長，很冗長，還會有`private`、`friend`、`protected`、`interface`等等附加功能出現。

**Prototypal Inheritance**
簡單、有彈性、易於延展。

**Reflection**
一個物件他可以看到自己內部，監聽或者改變內部的Property與Method。

**Function Constructors**
一段用來定義物件Construct的函式。
`this`指向建立好的空物件，而空物件的Property跟Method則是看這個function裡面寫什麼。

**Polyfill**
程式碼有一段程式是有些瀏覽器不支援的語法。

**Syntactic**
用另一種語法包裝一個以前就有的功能。

**Method Chaining**
`obj.metho1().metho2()`，`method1()`是對obj起作用，`method2()`也是對obj起作用。

**Transpile**
轉譯程式語法。

**Thenable**
具有`.then()`函式的物件。