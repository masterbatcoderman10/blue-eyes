<script>
  function getHelp() {}

  let obj = {};

  const images = [
    {
      url: "https://images.unsplash.com/photo-1612988013594-573ac7f9971d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1516307318288-46d4194fe79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1492618269284-653dce58fd6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1603643874903-c7e880a11ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1656484899207-0fe871c028c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1671&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1480200955624-3633ad70dceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1612719749696-c242fd47a391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1548087803-fdd83e257627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1656484899207-0fe871c028c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1671&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80",
    },
  ];
</script>

<header>
  <nav>
    <h1>Blue Eyes</h1>
  </nav>
</header>
<main class="img-grid" >
    {#each images as image}
        <div class="member" bind:this={image.element}><img src={image.url} alt="blue eyes"></div>
    {/each}
</main>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    background: black;
  }

  header {
    padding: 1%;
  }
  nav {
    text-align: center;
    color: white;
  }

  .img-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px
  }

  .member {
    height: 30vh;
    border-radius: 12px;
    overflow: hidden;

    &:hover {
        animation: sviwel 200ms ease-in-out infinite alternate forwards;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 2s linear;
  
      &:hover {
          transform: scale(1.1);
      }
    }
  }

  @keyframes sviwel {
    from {
        transform: rotate(-0.2deg);
    }

    to {
        transform: rotate(0.2deg);
    }
  }

</style>
