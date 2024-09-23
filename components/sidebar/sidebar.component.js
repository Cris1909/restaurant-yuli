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
    <button>
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
        Dashboard
      </a>
    </li>
    <li>
      <a href="/public/usuarios.html">
        <iconify-icon icon="mdi:users-group"></iconify-icon>
        Usuarios
      </a>
    </li>
    <li>
      <a href="/public/productos.html">
        <iconify-icon icon="mdi:file-chart-outline"></iconify-icon>
        Productos</a
      >
    </li>
    <li>
      <a href="../../pages/orders.html">
        <iconify-icon icon="mdi:file-document-plus-outline"></iconify-icon>
        Tomar pedido</a
      >
    </li>
    <li>
      <a href="/public/reportes.html">
        <iconify-icon icon="mdi:file-chart-outline"></iconify-icon>
        Reportes</a
      >
    </li>
    <li>
      <a href="/public/cocina.html">
        <iconify-icon icon="mdi:oven"></iconify-icon>
        Cocina</a
      >
    </li>
    <li>
      <a href="/public/historial.html">
        <iconify-icon
          icon="mdi:clipboard-text-clock-outline"
        ></iconify-icon>

        Historial de pedidos</a
      >
    </li>
    <li>
      <a href="/public/caja.html">
        <iconify-icon icon="mdi:cash-register"></iconify-icon>

        Caja / Facturación</a
      >
    </li>
  </ul>

  <button class="btn btn-black logout-button">Cerrar sesión</button>
</nav>

    `
  }
}

window.customElements.define('app-sidebar', Sidebar);