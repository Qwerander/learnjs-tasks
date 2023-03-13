for (const li of document.querySelectorAll('li')) {
    const text = li.firstChild.data;
    const countsChildren = li.getElementsByTagName('li').length;
    console.log(text);
    console.log(countsChildren);
    }

