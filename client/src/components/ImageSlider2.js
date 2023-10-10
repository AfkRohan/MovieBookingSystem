import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function ImageSlider2() {
  return (
    <div className="image-slider">
      <Carousel showArrows={true} showThumbs={false}>
        <div> 
            <iframe
                title="Video1"
                width="560"
                height="315"
                src="https://ca.video.search.yahoo.com/video/play;_ylt=AwrihXEWoiRlfGctUSc87olQ;_ylu=c2VjA3NyBHNsawN2aWQEZ3BvcwMzMA--?p=free+trailer+movies&vid=23daf24a34f4b159ddc2125a39cbf819&turl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOVP.88yZyRoL_l_G8ThGJUGZ6QHgFo%26pid%3DApi%26h%3D360%26w%3D480%26c%3D7%26rs%3D1&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DofCAS2sL5hc&tit=New+%3Cb%3EMovies%3C%2Fb%3E+%282023%29+4K+Film+Trailers&c=29&sigr=VfSvLZ2dbAlj&sigt=qNSdyTSCBOP7&sigi=.e1ad4mxpJnX&fr=p%3As%2Cv%3Av&h=360&w=480&l=1222&age=1693330581&fr=yhs-iba-1&hsimp=yhs-1&hspart=iba&type=pppr_10206_CHW_CA_tid651a_tp779_aymmkmnj_bt0&param1=virovlirXw9cXOMPCB6%2Fgg%3D%3D&param2=9dUI1n2R0BLDxNuWfiP4aSFOTltNdSPoIx38%2BUf%2FiXrvPdoGmStdlfwLFZYDvqkAJrWWk4yNReCLnBD%2FqPsDZd7olTZcV8HMx1G%2Fk786sE2Tis1g8dJd8zxVWs%2BbKztBnq1TfqUiqPYK9pXifXmJFyorDuCsYXJE71Y6G5tfejC72u5ObAo%2Fie%2F9Q3kdMwcgyn56wOcoAtBQBilufBJmfo7uu0016EGlST3An9LDQ9204NqihAT9x7dBLHcArq0Q6qUYx0YcYINClg6tpMbx8kixMu3flmporeVLVizpCAEbCIZL1wwhSOxtaVmEQhwjm7inI%2BjT8HlepuxlIKtP7Q%3D%3D&param3=NwVEMR%2FzKcG52XsVBYEh20CXm1wXp6anLmD4mFg%2BfsHqyO7IrwiJdpD78imyqL4QNmhezd33qJwBWHy8Tjxy3dnaZ49Nrq8pQ9jciveX5eI5tLzm5%2BWEoFTzwE%2F8F4e1imgQo1Rhc7SjXKku5DtWmp9AxepJjB9X8u556dEHlLjIStiAfex15eNw93NSCOBlT7aOKQvmSESZWdGD7F9sND6QTpcJYtG63VHWsNJdRJsy4spl3tR2OhO5I4wGM3Y5St07v8%2BioXlb8lzYXFwL70a7Sfm7mvZP9D03UuFps5SeEftab1R9YaWEKUPX1irK2eJuQ7oqmeqpNlkRrLmce9tdM9MgDbNEkTyJqmno5QwN5c0WOeAyYz48cFFfM4FmZrIfLAbDkLiXg4fsDjzdzpVa0hVUbjnpM%2FX02kWnWOK4CcjgW4N9vwbzpzrwGA0wL5T%2BhACQHwExZ8TuvWZQcsHhIKk6DFHsI7RQ6nCDZdJLOLBeW1G14AIpyIZgTutrFdhLE%2BxzoieHOdbxlN3a3DHAtcPp%2B2kEWyUJIYsowjQtPpGAS9OiBrO2eiMtE8%2BAbYFOcFEcb72bEzmxRZiRXoVsa3Xvu5%2FDwMfMXTLSoa%2B9iSvC8ShEc4sGDjQVRhySVx57C7R5YoqZZ94jwT2o0pDJPuZWJdlfhsaFJPMLJSWLMaVAy3whhxZXC%2Be%2FXy0V6wDJ%2BQ8c8Z7Ee%2FespQ5pWQEv9Z9ZdRTF5e3dyqfDICGVDSOLYISnHFO%2FX3VZJd46VYhXYxQOsWKREHCqRxmV3nylvrjpLBuiesPlxdF%2B7lBGcVy%2B%2B%2BYhL%2By%2BjJY971Gp&param4=%2Fp%2BFqCfFd0BWeyFrUMsVjdg3P2HJUduMEiyIW6BhhWA%3D&tt=b"
                frameborder="0"
                allowfullscreen
            >

          </iframe>
        </div>
        <div>
          <img src={'https://wallpapercave.com/wp/wp2162761.jpg'} alt="Slide2" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImageSlider2;
