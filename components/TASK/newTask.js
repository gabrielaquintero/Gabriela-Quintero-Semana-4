class ListTasks extends HTMLElement{

    constructor(){
        super()
    }

deleteTask(){
    this.remove()
}

connectedCallback(){
    this.newTask = this.getAttribute('newTask')
    this.task()
}

static get observedAttributes() {
    return ['newTask'];
}

attributeChangedCallback(name, oldValue, newValue){
    this.newTask = newValue;
    console.log(this.newTask);
    this.task()
    
}

task() {
    
    this.innerHTML = `

        <li class="task-item">
            <input type="checkbox" name="check" id="check">
            <label for="check">${this.newTask}</label>
            <button type="button" class="btn btn-outline-secondary">Borrar</button>
        </li>
    `

    const button = this.querySelector('button');
    button.addEventListener('click', () => {this.deleteTask()})
    
}

}


customElements.define('task-item', ListTasks);
export default ListTasks;

