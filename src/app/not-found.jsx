import Link from "next/link"
import "./notfound.css"
import Image from 'next/image'


const NotFound = () => {
  return (
    <>

      <div class="bg-purple body">

        <div class="stars">
          <div class="central-body">
            <Image class="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" />
              <Link href="/" class="btn-go-home" >GO BACK HOME</Link>
          </div>
          <div class="objects">
            <Image class="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
              <div class="earth-moon">
                <Image class="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                  <Image class="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                  </div>
                  <div class="box_astronaut">
                    <Image class="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                  </div>
              </div>
              <div class="glowing_stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>

              </div>

          </div>

      </div>

    </>
  )
}

export default NotFound