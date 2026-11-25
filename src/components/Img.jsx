import { useState } from 'react'
import { imgUrl } from '../topics.js'
export default function Img({ topic, className = '' }) {
  const [bad, setBad] = useState(false)
  return <div className={'img ' + className}>
    {bad ? <div className="img-fb"><span>{topic.emoji}</span></div>
      : <img src={imgUrl(topic.id)} alt={topic.title} loading="lazy" onError={() => setBad(true)} />}
  </div>
}
