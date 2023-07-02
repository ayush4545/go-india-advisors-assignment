import Image from 'next/image'
import Header from './components/Header'
import Header2 from './components/Header2'
import MainComponent from './components/Main'
import AddMore from './components/AddMore'
import BottomButtons from './components/BottomButtons'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <Header2 />
      <MainComponent />
      <AddMore />
      <BottomButtons />
    </div>
  )
}
