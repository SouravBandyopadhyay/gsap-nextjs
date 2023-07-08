'use client'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import Navbar from './Navbar'
gsap.registerPlugin(CSSPlugin)
export default function Home() {
  return (
    <><Navbar/></>
  )
}
