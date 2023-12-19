import { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'about',
}


export default function About() {
  return (
    <><h1>Hello, about.js!</h1>
      <Link href="/dashboard">Dashboard</Link></>
  );
}

