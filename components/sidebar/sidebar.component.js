class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="sidebar">
      <div class="top-menu">
        <button>
          <iconify-icon
            class="settings-button"
            icon="mdi:settings"
          ></iconify-icon>
        </button>
        <button data-resize-btn>
          <iconify-icon icon="mdi:hamburger-menu"></iconify-icon>
        </button>
      </div>
      <div class="info-menu">
        <img src="/public/images/yuli-logo.png" alt="Logo Yuli" />
        <h4 class="subtitle">Luis Barrera</h4>
        <p class="paragraph">Administrador</p>
      </div>

      <ul class="sidebar-menu">
        <li>
          <a href="/">
            <iconify-icon icon="mdi:view-dashboard"></iconify-icon>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/public/usuarios.html">
            <iconify-icon icon="mdi:users-group"></iconify-icon>
            <span>Usuarios</span>
          </a>
        </li>
        <li>
          <a href="/public/productos.html">
            <iconify-icon icon="mdi:file-chart-outline"></iconify-icon>
            <span>Productos</span>
          </a>
        </li>
        <li>
          <a href="../../pages/orders.html">
            <iconify-icon icon="mdi:file-document-plus-outline"></iconify-icon>
            <span>Tomar pedido</span>
          </a>
        </li>
        <li>
          <a href="/public/reportes.html">
            <iconify-icon icon="mdi:file-chart-outline"></iconify-icon>
            <span>Reportes</span>
          </a>
        </li>
        <li>
          <a href="/public/cocina.html">
            <iconify-icon icon="mdi:oven"></iconify-icon>
            <span>Cocina</span>
          </a>
        </li>
        <li>
          <a href="/public/historial.html">
            <iconify-icon
              icon="mdi:clipboard-text-clock-outline"
            ></iconify-icon>
            <span>Pedidos</span>
          </a>
        </li>
        <li>
          <a href="/public/caja.html">
            <iconify-icon icon="mdi:cash-register"></iconify-icon>
            <span>Facturación</span>
          </a>
        </li>
      </ul>

      <button class="btn btn-black logout-button">
      <iconify-icon icon="mdi:logout" class="logout-icon"></iconify-icon>
      <span>
      Cerrar sesión
      </span>
      </button>
    </nav>
    `;

    const resizeBtn = this.querySelector("[data-resize-btn]");
    resizeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.toggle("sb-expanded");
    });
  }
}

window.customElements.define("app-sidebar", Sidebar);
