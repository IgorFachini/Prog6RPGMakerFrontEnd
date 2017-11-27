var navbarVm = "";
// registro
let navbarComponent = {
  template: `	<nav id="primary-navigation">
  <ul class="nav-list">
    <li>
      <a :class="{active: isCurrentPage('index.html')}" href="index.html">HOME</a>
    </li>
    <li class="has-children">
      <a href="#" class="">Rpg</a>
      <ul>
        <li>
          <a :class="{active: isCurrentPage('world_of_darkness.html')}" href="./world_of_darkness.html"  class="">Criar personagem</a>
        </li>
        <li>
          <p class="coming-soon">
            <span class="coming-soon-name">Mais opções</span>
            <span class="coming-soon-text" style="font-size:0pt">Em Breve...</span>
          </p>
        </li>
      </ul>
    </li>
    <li class="has-children">
      <a href="#" class="">TestCrud</a>
      <ul>
        <li>
          <a :class="{active: isCurrentPage('users.html')}" href="./users.html">UserList</a>
        </li>
        <li>
          <a :class="{active: isCurrentPage('userform.html')}" href="./userform.html">UserCreat</a>
        </li>
        <li>
          <a :class="{active: isCurrentPage('players.html')}" href="./players.html">PlayerList</a>
        </li>
        <li>
          <a :class="{active: isCurrentPage('playerform.html')}" href="./playerform.html">PlayerCreat</a>
        </li>
        <li>
          <a :class="{active: isCurrentPage('chronicles.html')}" href="./chronicles.html">ChronicleList</a>
        </li>
        <li>
          <a :class="{active: isCurrentPage('chronicleform.html')}" href="./chronicleform.html">ChronicleCreat</a>
        </li>
      </ul>
    </li>
    <li v-if="!this.userData">
      <a :class="{active: isCurrentPage('signin.html')}" href="#" class="">Login</a>
      <a :class="{active: isCurrentPage('signup.html')}" href="#" class="">Cadastra</a>					
    </li>
    <li v-if="this.userData">
      <a href="#" class="">Ola usuario</a>											
    </li>
  </ul>
  <div class="close"></div>
</nav>`,
  methods: {
    isCurrentPage: function(page) {
      console.log(page);
      return window.location.pathname.split("/").pop() == page;
    }
  }
};
navbarVm = new Vue({
  el: "#navBarContainer",
  data: {
    userData: ""
  },
  methods: {
   
  },
  components: {
    "navbar-component": navbarComponent
  }
});
