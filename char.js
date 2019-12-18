
class Individuo {
  constructor(img) {
    this.img = img
    this.srcX = 0
    this.srcY = 0
    this.srcWidth = 95
    this.srcHeight = 158
    this.x = 100
    this.y = 100
    this.frameCount = 0
    this.direction = Math.floor(Math.random() * 4)
    this.time = 0
    this.maycao = 180
  }

  draw() {
    ctx.drawImage(
      img,
      this.srcX, this.srcY, this.srcWidth, this.srcHeight,
      this.x, this.y, 78, 139
    )
  }

  update() {

    switch (this.direction) {
      case 0:
        this.srcY = 0
      break;
      case 1:
        this.srcY = 158
      break;
      case 2:
        this.srcY = 316
      break;
      case 3:
        this.srcY = 474
      break;

    }

    if (this.direction === 0) {
      this.y+=2
    }else if (this.direction === 1) {
      this.x-=2
    }else if (this.direction === 2) {
      this.x+=2
    }else if (this.direction === 3) {
      this.y-=2
    }

    if (this.x + 78 >= cnv.width) {
      this.x = this.x - 1
      this.direction = Math.floor(Math.random() * 4)
      this.time = 0
    }else if (this.x <= 0) {
      this.x = 1
      this.direction = Math.floor(Math.random() * 4)
      this.time = 0
    }else if (this.y <= 0) {
      this.y = 1
      this.direction = Math.floor(Math.random() * 4)
      this.time = 0
    }else if (this.y + 139 >= cnv.height) {
      this.y = this.y - 1
      this.direction = Math.floor(Math.random() * 4)
      this.time = 0
    }

    this.frameCount++
    this.time++

    if (this.frameCount >= 60 ) {
      this.frameCount = 0
    }

    if (this.time >= this.maycao) {
      this.direction = Math.floor(Math.random() * 4)
      this.time = 0
    }

    this.srcX = Math.floor(this.frameCount/5) * this.srcWidth

  }

}
