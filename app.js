let cantidadItems = 0;
let totalAcumulado = 0;

const badge = document.querySelector("#badge");
const listaCarrito = document.querySelector("#lista-carrito");
const total = document.querySelector("#total");
const btnVaciar = document.querySelector("#btn-vaciar");
const carrito = document.querySelector("#carrito");

// Seleccionar todos los botones de agregar
document.querySelectorAll(".btn-agregar").forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.dataset.nombre;
    const precio = parseFloat(boton.dataset.precio);
    agregarAlCarrito(nombre, precio);
  });
});

function agregarAlCarrito(nombre, precio) {
  // Mostrar carrito si estaba oculto
  carrito.style.display = "block";

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = `${nombre} - $${precio.toLocaleString("es-CO")} COP`;

  const btnEliminar = document.createElement("span");
  btnEliminar.textContent = "❌";
  btnEliminar.className = "btn-eliminar";
  btnEliminar.style.cursor = "pointer";
  li.appendChild(btnEliminar);

  listaCarrito.appendChild(li);

  cantidadItems++;
  totalAcumulado += precio;
  updateBadge();
  updateTotal();

  btnEliminar.addEventListener("click", () => eliminarItem(li, precio));
}

function eliminarItem(li, precio) {
  li.remove();
  cantidadItems--;
  totalAcumulado -= precio;
  updateBadge();
  updateTotal();

  // Si ya no hay productos, ocultar carrito
  if (cantidadItems === 0) {
    carrito.style.display = "none";
  }
}

function updateBadge() {
  badge.textContent = cantidadItems;
}

function updateTotal() {
  total.textContent = "$" + totalAcumulado.toLocaleString("es-CO") + " COP";
}

btnVaciar.addEventListener("click", () => {
  listaCarrito.querySelectorAll("li").forEach(li => li.remove());
  cantidadItems = 0;
  totalAcumulado = 0;
  updateBadge();
  updateTotal();
  carrito.style.display = "none"; // Ocultar carrito al vaciar
});