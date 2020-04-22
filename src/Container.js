import React from 'react'
import './container.scss'

export default function Container() {
  return (
    <div className="container">
      <main>
        <div className="actions">
          <button>Like</button>
          <button>Unlike</button>
          <button>New Image</button>
        </div>
      </main>
      <aside>
        <div className="logo">
          <h1>Cats for me</h1>
        </div>
        <div className="fun_fact">
          <p>
            While Chartreux cats aren't very vocal, they are sociable and communicate through eye contact and body language
          </p>
          <button>
            New Fun Fact
          </button>
        </div>
      </aside>
    </div>
  )
}