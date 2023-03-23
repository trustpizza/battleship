import './style.css';
import startForm from './ui-components/start-page';

const content = document.getElementById("content");

const form = startForm;
content.append(form);

const title = document.createElement('h1');
title.textContent = "Hello"
title.className = "text-3xl font-bold underline"
content.append(title)