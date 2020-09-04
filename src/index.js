import {model} from './module'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'
import './styles/main.css'

const site = new Site('#site');

const updateCallback = newBlock => {
    console.log(newBlock)
    model.push(newBlock);
    site.render(model)
};

new Sidebar('#panel', updateCallback);
site.qwerty(model);

