import React from 'react';
import { render } from 'react-dom';


window.loadpage = () => {
    const content = document.getElementById("content");
    render(<div>Hello World</div>, content);
};
