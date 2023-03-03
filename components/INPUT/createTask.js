class CreateTask extends HTMLElement{
    constructor(){
        super()
        this.taskinput()
    }

    taskinput(){
        this.innerHTML = `
        <base href>
            <div>
                <form class="crear-tarea">
                    <div class="input-group mb-3" id="input">
                    <input type="text" class="form-control" id= "espacio-blanco" placeholder="Nueva tarea" aria-label="Nueva tarea" aria-describedby="boton">
                    <button type="button" class="btn btn-outline-secondary" id="boton-crear">Crear Tarea</button>
                
                    </div>
                </form>
            </div>
            

        `;
    }
}

customElements.define('create-task', CreateTask);
export default CreateTask;

