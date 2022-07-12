// var libraryName = 'Lib 2'; // 這是容易造成衝突的寫法

//推薦寫法：檢查Global Namespace
window.libraryName = window.libraryName || 'Lib 2';