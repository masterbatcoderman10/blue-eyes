<script>
  import { flip } from "svelte/animate";
  let selectedImage = null;

  const selectImage = (e, image) => {
    if (selectedImage === image) {
      selectedImage = null;
      return 0;
    }
    selectedImage = image;
  };

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
<main class="img-grid">
  {#each images as image (image)}
    <div
      class="member {image === selectedImage ? 'selected' : ''}"
      bind:this={image.element}
      on:click={(e) => selectImage(e, image)}
      animate:flip={{ duration: 400 }}
    >
      <img src={image.url} alt="blue eyes" />
    </div>
  {/each}
</main>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
  }

  header {
    padding: 1%;
    margin-bottom: 10vh;
  }
  nav {
    text-align: center;
    color: white;
  }

  .img-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 25vh;
    gap: 10px;
    padding: 0 10%;
  }

  .member {
    border-radius: 12px;
    overflow: hidden;

    @media (min-width: 768px) {
      &:hover {
        animation: sviwel 200ms ease-in-out infinite alternate forwards;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 200ms linear;

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

  @media (min-width: 768px) {
    .img-grid {
      grid-template-columns: repeat(4, 1fr);
    }

    .selected {
      grid-column: 2 / span 2;
      grid-row: 1 / span 2;
    }
  }
</style>
