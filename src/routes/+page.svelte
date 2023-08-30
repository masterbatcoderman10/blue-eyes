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
      url: `/imgs/be-1.avif`,
    },
    {
      url: `/imgs/be-2.avif`,
    },
    {
      url: `/imgs/be-3.avif`,
    },
    {
      url: `/imgs/be-4.avif`,
    },
    {
      url: `/imgs/be-5.avif`,
    },
    {
      url: `/imgs/be-6.avif`,
    },
    {
      url: `/imgs/be-7.avif`,
    },
    {
      url: `/imgs/be-8.avif`,
    },
    {
      url: `/imgs/be-9.avif`,
    },
    {
      url: `/imgs/be-10.avif`,
    },
    {
      url: `/imgs/be-11.avif`,
    },
    {
      url: `/imgs/be-12.avif`,
    },
  ];
</script>

<svelte:head>
  <title>Blue Eyes</title>
</svelte:head>
<header>
  <nav>
    <h1>Blue Eyes V2</h1>
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
