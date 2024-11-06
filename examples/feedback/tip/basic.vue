<template>
  <div class="basic-box">
    <div class="row center">
      <u-tip direction="top" alignment="start" content="我是 Top Start">
        <u-button>top-start</u-button>
      </u-tip>
      <u-tip direction="top" alignment="center" content="我是 Top Center">
        <u-button>top</u-button>
      </u-tip>
      <u-tip direction="top" alignment="end" content="我是 Top End">
        <u-button>top-end</u-button>
      </u-tip>
    </div>

    <div class="row">
      <u-tip direction="left" alignment="start" content="我是 Left Start">
        <u-button>left-start</u-button>
      </u-tip>
      <u-tip direction="right" alignment="start" content="我是 Right Start">
        <u-button>right-start</u-button>
      </u-tip>
    </div>

    <div class="row">
      <u-tip direction="left" alignment="center" content="我是 Left Center">
        <u-button class="mt-3 mb-3">left</u-button>
      </u-tip>
      <u-tip direction="right" alignment="center" content="我是 Right Center">
        <u-button>right</u-button>
      </u-tip>
    </div>

    <div class="row">
      <u-tip direction="left" alignment="end" content="我是 Left End">
        <u-button>left-end</u-button>
      </u-tip>
      <u-tip direction="right" alignment="end" content="我是 Right End">
        <u-button>right-end</u-button>
      </u-tip>
    </div>

    <div class="row center">
      <u-tip direction="bottom" alignment="start" content="我是 Bottom Start">
        <u-button>bottom-start</u-button>
      </u-tip>
      <u-tip direction="bottom" alignment="center" content="我是 Bottom Center">
        <u-button>bottom</u-button>
      </u-tip>
      <u-tip direction="bottom" alignment="end" content="我是 Bottom End">
        <u-button>bottom-end</u-button>
      </u-tip>
    </div>
  </div>
</template>

<style scoped>
.basic-box {
  width: 600px;
}

.basic-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.basic-box .center {
  justify-content: center;
}

.basic-box .center > * {
  margin: 0 10px;
}
</style>
