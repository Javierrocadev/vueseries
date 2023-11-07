<template>
    <div>
        <h1>Nuevo personaje</h1>
        <form>
            <label>Id departamento</label>
            <input type="number" class="form-control"
                />
            <label>Nombre</label>
            <input type="text" class="form-control"
                />
            <label>Localidad</label>
            <input type="text" class="form-control"
                />
            <button class="btn btn-info">
                Create
            </button>

        </form>
    </div>
</template>
<script>
export default{
    name:"CrearPersonaje"
}
</script>