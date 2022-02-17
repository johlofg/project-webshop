import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

const Loading = () => {  

  const lottieContainer = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../animations/lottie.json')
  })
  }, [])

  return (
  <div className='lottieContaine' ref={lottieContainer}/>
  )
}

export default Loading