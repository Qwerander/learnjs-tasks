// 1. Правда, что elem.lastChild.nextSibling всегда равен null?
// 2. Правда, что elem.children[0].previousSibling всегда равен null ?

// 1. Да. Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
// 2. Нет. Неверно. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.