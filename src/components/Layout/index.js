import React, { Component } from "react"
import "../../scss/main.scss"
import { DefaultSEO } from "../DefaultSEO"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { MajorLeagueHackingBadge } from "../MajorLeagueHackingBadge"
import styles from "./index.module.scss"

class Layout extends Component {
  render() {
    return (
      <div>
        <DefaultSEO />
        <MajorLeagueHackingBadge />
        <div className={styles.layout}>
          <Header />
          <main className={styles.content}>{this.props.children}</main>
          <Footer />
        </div>
      </div>
    )
  }
}

export { Layout }
